import React from "react";
import CheckboxTree from "react-checkbox-tree";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const nodes = [
  {
    value: "/app",
    label: "Client ID: Best Buy Inc",
    children: [
      {
        value: "/app/Http",
        label: "Agent: PLAT C (736970115886)",
        children: [
          {
            value: "/app/Http/Controllers",
            label: "Corp: Best Buy ApplePay/Partsearch (345961663886)",
            children: [
              {
                value: "/app/Http/Controllers/Bestbuy.com (372395416889)",
                label: "Chain: Bestbuy.com (372395416889)",
                children: [
                  {
                    value:
                      "/app/Http/Controllers/Bestbuy.com (372395416889)/Account: 2 accounts",
                    label: "Account: 2 accounts",
                  },
                ],
              },
              {
                value:
                  "/app/Http/Controllers/Partsearch Technologies (345951453884)",
                label: "Chain: Partsearch Technologies (345951453884)",
                children: [
                  {
                    value:
                      "/app/Http/Controllers/Partsearch Technologies (345951453884)/Account: 2 accounts",
                    label: "Account: 2 accounts",
                  },
                ],
              },
              {
                value:
                  "/app/Http/Controllers/Magnolia Hi Fi Inc. (345770051885)",
                label: "Chain: Magnolia Hi Fi Inc. (345770051885)",
              },
            ],
          },
        ],
      },
    ],
  },
];

class BasicExample extends React.Component {
  state = {
    checked: [
      "/app/Http/Controllers/WelcomeController.js",
      "/app/Http/routes.js",
      "/public/assets/style.css",
      "/public/index.html",
      "/.gitignore",
    ],
    expanded: ["/app"],
  };

  constructor(props) {
    super(props);

    this.onCheck = this.onCheck.bind(this);
    this.onExpand = this.onExpand.bind(this);
  }

  onCheck(checked) {
    this.setState({ checked });
  }

  onExpand(expanded) {
    this.setState({ expanded });
  }

  render() {
    const { checked, expanded } = this.state;

    return (
      <CheckboxTree
        checked={checked}
        expanded={expanded}
        // iconsClass="fa5"
        // icons={{
        //   check: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-check"
        //       icon="check-square"
        //     />
        //   ),
        //   uncheck: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-uncheck"
        //       icon={["fas", "square"]}
        //     />
        //   ),
        //   halfCheck: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-half-check"
        //       icon="check-square"
        //     />
        //   ),
        //   expandClose: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-expand-close"
        //       icon="chevron-right"
        //     />
        //   ),
        //   expandOpen: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-expand-open"
        //       icon="chevron-down"
        //     />
        //   ),
        //   expandAll: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-expand-all"
        //       icon="plus-square"
        //     />
        //   ),
        //   collapseAll: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-collapse-all"
        //       icon="minus-square"
        //     />
        //   ),
        //   parentClose: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-parent-close"
        //       icon="folder"
        //     />
        //   ),
        //   parentOpen: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-parent-open"
        //       icon="folder-open"
        //     />
        //   ),
        //   leaf: (
        //     <FontAwesomeIcon
        //       className="rct-icon rct-icon-leaf-close"
        //       icon="file"
        //     />
        //   ),
        // }}
        nodes={nodes}
        onCheck={this.onCheck}
        onExpand={this.onExpand}
      />
    );
  }
}

export default BasicExample;
