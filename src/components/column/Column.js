import { Component } from 'react';
import PropTypes from 'prop-types';

export class Column extends Component {

    static defaultProps = {
        columnKey: null,
        field: null,
        sortField: null,
        filterField: null,
        header: null,
        body: null,
        footer: null,
        sortable: false,
        sortableDisabled: false,
        sortFunction: null,
        dataType: 'text',
        filter: false,
        filterMatchMode: null,
        filterPlaceholder: null,
        filterType: 'text',
        filterMaxLength: null,
        filterElement: null,
        filterFunction: null,
        filterHeaderStyle: null,
        filterHeaderClassName: null,
        showFilterMenu: true,
        showFilterOperator: true,
        showClearButton: true,
        showApplyButton: true,
        showFilterMatchModes: true,
        showFilterMenuOptions: true,
        showAddButton: true,
        filterMatchModeOptions: null,
        maxConstraints: 2,
        filterMenuClassName: null,
        filterMenuStyle: null,
        alignFrozen: 'left',
        hidden: false,
        onFilterClear: null,
        onFilterApplyClick: null,
        onFilterMatchModeChange: null,
        onFilterOperatorChange: null,
        onFilterConstraintAdd: null,
        onFilterConstraintRemove: null,
        filterClear: null,
        filterApply: null,
        filterHeader: null,
        filterFooter: null,
        style: null,
        className: null,
        headerStyle: null,
        headerClassName: null,
        bodyStyle: null,
        bodyClassName: null,
        footerStyle: null,
        footerClassName: null,
        expander: false,
        frozen: false,
        selectionMode: null,
        colSpan: null,
        rowSpan: null,
        editor: null,
        cellEditValidator: null,
        cellEditValidatorEvent: 'click',
        onBeforeCellEditHide: null,
        onBeforeCellEditShow: null,
        onCellEditInit: null,
        onCellEditComplete: null,
        onCellEditCancel: null,
        excludeGlobalFilter: false,
        rowReorder: false,
        rowReorderIcon: 'pi pi-bars',
        rowEditor: false,
        exportable: true,
        reorderable: true
    }

    static propTypes = {
        columnKey: PropTypes.string,
        field: PropTypes.string,
        sortField: PropTypes.string,
        filterField: PropTypes.string,
        header: PropTypes.any,
        body: PropTypes.any,
        footer: PropTypes.any,
        sortable: PropTypes.bool,
        sortableDisabled: PropTypes.bool,
        sortFunction: PropTypes.func,
        dataType: PropTypes.string,
        filter: PropTypes.bool,
        filterMatchMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        filterType: PropTypes.string,
        filterMaxLength: PropTypes.number,
        filterElement: PropTypes.any,
        filterFunction: PropTypes.func,
        filterHeaderStyle: PropTypes.object,
        filterHeaderClassName: PropTypes.string,
        showFilterMenu: PropTypes.bool,
        showFilterOperator: PropTypes.bool,
        showClearButton: PropTypes.bool,
        showApplyButton: PropTypes.bool,
        showFilterMatchModes: PropTypes.bool,
        showFilterMenuOptions: PropTypes.bool,
        showAddButton: PropTypes.bool,
        filterMatchModeOptions: PropTypes.any,
        maxConstraints: PropTypes.number,
        filterMenuClassName: PropTypes.string,
        filterMenuStyle: PropTypes.object,
        alignFrozen: PropTypes.string,
        hidden: PropTypes.bool,
        onFilterClear: PropTypes.func,
        onFilterApplyClick: PropTypes.func,
        onFilterMatchModeChange: PropTypes.func,
        onFilterOperatorChange: PropTypes.func,
        onFilterConstraintAdd: PropTypes.func,
        onFilterConstraintRemove: PropTypes.func,
        filterClear: PropTypes.any,
        filterApply: PropTypes.any,
        filterHeader: PropTypes.any,
        filterFooter: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        headerStyle: PropTypes.object,
        headerClassName: PropTypes.string,
        bodyStyle: PropTypes.object,
        bodyClassName: PropTypes.string,
        footerStyle: PropTypes.object,
        footerClassName: PropTypes.string,
        expander: PropTypes.bool,
        frozen: PropTypes.bool,
        selectionMode: PropTypes.string,
        colSpan: PropTypes.number,
        rowSpan: PropTypes.number,
        editor: PropTypes.func,
        cellEditValidator: PropTypes.func,
        cellEditValidatorEvent: PropTypes.string,
        onBeforeCellEditHide: PropTypes.func,
        onBeforeCellEditShow: PropTypes.func,
        onCellEditInit: PropTypes.func,
        onCellEditComplete: PropTypes.func,
        onCellEditCancel: PropTypes.func,
        excludeGlobalFilter: PropTypes.bool,
        rowReorder: PropTypes.bool,
        rowReorderIcon: PropTypes.string,
        rowEditor: PropTypes.bool,
        exportable: PropTypes.bool,
        reorderable: PropTypes.bool
    }
}
