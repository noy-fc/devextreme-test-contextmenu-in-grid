import React, { Component } from "react";
import DataGrid, {
  Editing,
  GroupPanel,
  Grouping,
  Export,
  HeaderFilter,
  SearchPanel,
  ColumnChooser,
  Paging,
  Scrolling,
  Selection
} from "devextreme-react/data-grid";
import ContextMenu from "devextreme-react/context-menu";
import Popup from "devextreme-react/popup";
import { employees, contextMenuItems } from "./data.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };

    this.cloneIconClick = this.cloneIconClick.bind(this);
    this.contextMenuItemClick = this.contextMenuItemClick.bind(this);
    this.clickOkOnPopup = this.clickOkOnPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }

  contextMenuItemClick(e) {
    if (!e.itemData.items) {
      if (e.itemData.text === "ShowPopup") {
        this.showPopup();
      } else {
        alert(`The "${e.itemData.text}" item was clicked`);
      }
    }
  }

  cloneIconClick(e) {
    // show context menu on cloneIcon clicked
  }

  showPopup() {
    this.setState({ popupVisible: true });
  }
  hidePopup() {
    this.setState({ popupVisible: false });
  }
  clickOkOnPopup() {
    this.hidePopup();
  }

  getColumnsConfig() {
    const configs = [
      {
        type: "buttons",
        width: 110,
        buttons: [
          {
            hint: "More Function",
            icon: "more",
            visible: true,
            onClick: this.cloneIconClick
          }
        ]
      },
      { dataField: "Prefix", caption: "Title", dataType: "string" },
      { dataField: "FirstName", caption: "FirstName", dataType: "string" },
      { dataField: "LastName", caption: "LastName", dataType: "string" },
      { dataField: "Position", caption: "Position", dataType: "string" },
      { dataField: "BirthDate", caption: null, dataType: "date" }
    ];
    return configs;
  }
  render() {
    return (
      <div>
        <DataGrid
          id={"gridContainer"}
          dataSource={employees}
          keyExpr={"ID"}
          showBorders={true}
          columns={this.getColumnsConfig()}
        >
          <Editing mode={"row"} useIcons={true} />
          <GroupPanel visible={true} />
          <Grouping autoExpandAll={false} />
          <SearchPanel visible={true} width={250} />
          <HeaderFilter visible={true} />
          <Export
            enabled={true}
            fileName={this.props.exportFileName}
            allowExportSelectedData={true}
          />
          <ColumnChooser enabled={true} />
          <Selection mode={"multiple"} showCheckBoxesMode={"onClick"} />
          <Paging enabled={false} />
          <Scrolling showScrollbar={"always"} />
        </DataGrid>

        <ContextMenu
          dataSource={contextMenuItems}
          width={200}
          target={".dx-link.dx-icon-more"}
          showEvent={"dxclick"}
          onItemClick={this.contextMenuItemClick}
        />

        <Popup
          className={"popup"}
          visible={this.state.popupVisible}
          onHiding={this.hidePopup}
          dragEnabled={true}
          closeOnOutsideClick={true}
          showTitle={true}
          title={"Test Popup"}
          defaultWidth={"300"}
          defaultHeight={"250"}
          resizeEnabled={true}
        >
          <button onClick={this.clickOkOnPopup}>OK</button>
        </Popup>
      </div>
    );
  }
}

export default App;
