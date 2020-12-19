import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  TreeList,
  orderBy,
  filterBy,
  mapTree,
  extendDataItem,
  TreeListTextFilter,
  TreeListNumericFilter,
  TreeListDateFilter,
  TreeListBooleanFilter,
} from "@progress/kendo-react-treelist";
import employees from "./data";

const subItemsField = "employees";
const expandField = "expanded";
const columns = [
  {
    field: "name",
    title: "Name",
    width: 250,
    filter: TreeListTextFilter,
    expandable: true,
  },
  {
    field: "hireDate",
    title: "Hire Date",
    width: 200,
    format: "{0:d}",
    filter: TreeListDateFilter,
  },
  {
    field: "timeInPosition",
    title: "Year(s) in Position",
    width: 200,
    filter: TreeListNumericFilter,
  },
  {
    field: "fullTime",
    title: "Full Time",
    width: 100,
    filter: TreeListBooleanFilter,
  },
];

class App extends React.Component {
  state = {
    data: [...employees],
    dataState: {
      sort: [{ field: "name", dir: "asc" }],
      filter: [],
    },
    expanded: [1, 2, 32],
  };

  onExpandChange = (e) => {
    this.setState({
      expanded: e.value
        ? this.state.expanded.filter((id) => id !== e.dataItem.id)
        : [...this.state.expanded, e.dataItem.id],
    });
  };

  handleDataStateChange = (event) => {
    this.setState({
      dataState: event.dataState,
    });
  };

  addExpandField = (dataTree) => {
    const expanded = this.state.expanded;
    return mapTree(dataTree, subItemsField, (item) =>
      extendDataItem(item, subItemsField, {
        [expandField]: expanded.includes(item.id),
      })
    );
  };

  processData = () => {
    let { data, dataState } = this.state;
    let filteredData = filterBy(data, dataState.filter, subItemsField);
    let sortedData = orderBy(filteredData, dataState.sort, subItemsField);
    return this.addExpandField(sortedData);
  };

  render() {
    return (
      <TreeList
        style={{ maxHeight: "510px", overflow: "auto" }}
        expandField={expandField}
        subItemsField={subItemsField}
        onExpandChange={this.onExpandChange}
        sortable={{ mode: "multiple" }}
        {...this.state.dataState}
        data={this.processData()}
        onDataStateChange={this.handleDataStateChange}
        columns={columns}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
