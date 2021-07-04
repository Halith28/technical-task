import React from "react";
import CheckboxTree from "react-checkbox-tree";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const nodes = [
  {
    value: "/app",
    label: "app",
    children: [
      {
        value: "/app/Http",
        label: "Http",
        children: [
          {
            value: "/app/Http/Controllers",
            label: "Controllers",
            children: [
              {
                value: "/app/Http/Controllers/WelcomeController.js",
                label: "WelcomeController.js",
              },
            ],
          },
          {
            value: "/app/Http/routes.js",
            label: "routes.js",
          },
        ],
      },
      {
        value: "/app/Providers",
        label: "Providers",
        children: [
          {
            value: "/app/Providers/EventServiceProvider.js",
            label: "EventServiceProvider.js",
          },
        ],
      },
    ],
  },
  {
    value: "/config",
    label: "config",
    children: [
      {
        value: "/config/app.js",
        label: "app.js",
      },
      {
        value: "/config/database.js",
        label: "database.js",
      },
    ],
  },
  {
    value: "/public",
    label: "public",
    children: [
      {
        value: "/public/assets/",
        label: "assets",
        children: [
          {
            value: "/public/assets/style.css",
            label: "style.css",
          },
        ],
      },
      {
        value: "/public/index.html",
        label: "index.html",
      },
    ],
  },
  {
    value: "/.env",
    label: ".env",
  },
  {
    value: "/.gitignore",
    label: ".gitignore",
  },
  {
    value: "/README.md",
    label: "README.md",
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
