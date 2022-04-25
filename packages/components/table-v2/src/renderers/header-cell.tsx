import { HeaderCell, SortIcon } from '../components'
// import ColumnResizer from '../table-column-resizer'
import { Alignment, SortOrder, oppositeOrderMap } from '../constants'
import { placeholderSign } from '../private'
import { componentToSlot, enforceUnit, tryCall } from '../utils'

import type { FunctionalComponent, UnwrapNestedRefs } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { TableV2HeaderRowCellRendererParams } from '../components'
import type { UseTableReturn } from '../use-table'
import type { TableV2Props } from '../table'
import type { TableV2HeaderCell } from '../header-cell'

type HeaderCellRendererProps = TableV2HeaderRowCellRendererParams &
  UnwrapNestedRefs<Pick<UseTableReturn, 'columnsStyles' | 'onColumnSorted'>> &
  Pick<TableV2Props, 'sortBy' | 'sortState' | 'headerCellProps'> & {
    ns: UseNamespaceReturn
  }

const HeaderCellRenderer: FunctionalComponent<HeaderCellRendererProps> = (
  props,
  { slots }
) => {
  const { column, ns, columnsStyles, onColumnSorted } = props

  const style = enforceUnit(columnsStyles[column.key])

  if (column.placeholderSign === placeholderSign) {
    return <div class={ns.em('header-row-cell', 'placeholder')} style={style} />
  }

  const { headerCellRenderer, headerClass, sortable } = column

  /**
   * render Cell children
   */

  const cellProps = {
    ...props,
    class: ns.e('header-cell-text'),
  }

  const cellRenderer =
    componentToSlot<typeof cellProps>(headerCellRenderer) ||
    slots.default ||
    ((props: TableV2HeaderCell) => <HeaderCell {...props} />)

  const Cell = cellRenderer(cellProps)

  /**
   * Render cell container and sort indicator
   */
  const { sortBy, sortState, headerCellProps } = props

  let sorting: boolean, sortOrder: SortOrder
  if (sortState) {
    const order = sortState[column.key]
    sorting = Boolean(oppositeOrderMap[order])
    sortOrder = sorting ? order : SortOrder.ASC
  } else {
    sorting = column.key === sortBy.key
    sortOrder = sorting ? sortBy.order : SortOrder.ASC
  }

  const cellKls = [
    ns.e('header-cell'),
    ...tryCall(headerClass, props, ''),
    column.align === Alignment.CENTER && ns.is('align-center'),
    column.align === Alignment.RIGHT && ns.is('align-right'),
    sortable && ns.is('sortable'),
  ]

  const cellWrapperProps = {
    ...tryCall(headerCellProps, props),
    onClick: column.sortable ? onColumnSorted : undefined,
    class: cellKls,
    style,
    ['data-key']: column.key,
  }

  // For now we don't deliver resizable column feature since it has some UX issue.
  return (
    <div {...cellWrapperProps}>
      {Cell}

      {sortable && (
        <SortIcon
          class={[ns.e('sort-icon'), sorting && ns.is('sorting')]}
          sortOrder={sortOrder}
        />
      )}
    </div>
  )
}

export default HeaderCellRenderer