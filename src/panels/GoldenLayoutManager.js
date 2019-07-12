import { ItemConfig } from "panels/panelDefs";


class GoldenLayoutManager {

    static instance;

    static setInstance(instance) {
        this.instance = instance;
        this.initialize();
    };

    static initialize() {
        this.registerComponent();
        this.instance.init();
        console.log('Successfully registered components!')
    }

    static registerComponent() {
        ItemConfig.forEach(config => {
          this.instance.registerComponent(config.key, config.component);
        });
    };

    static updateSize() {
        this.instance.updateSize();
    }

    static openPanel(component) {
        let newItemConfig = {
            title: component,
            type: "react-component",
            component: component
          };
          console.log(this.instance.updateSize)
          const lastItem = this.instance.root.contentItems;
          lastItem[0].addChild(newItemConfig);
    };
}

export default GoldenLayoutManager;