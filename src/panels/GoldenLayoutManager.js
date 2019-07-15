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

    static getSelectedItem() {
        return this.instance.selectedItem;
    }

    static getComponentKeys() {
        return ItemConfig.map(item => {
            return item.key;
        });
    }

    static openPanel(component) {
        let newItemConfig = {
            title: component,
            type: "react-component",
            component: component
          };
          const lastItem = this.instance.root.contentItems;
          lastItem[0].addChild(newItemConfig);
    };

    static closeAll() {
        const contentItems = this.instance.root.contentItems || [];
        if (contentItems.length > 0) {
            while(contentItems[0].contentItems.length > 0) {
                contentItems[0].removeChild(contentItems[0].contentItems[0])
            }
        }
    }

    static openAll() {
        ItemConfig.forEach(component => {
            this.openPanel(component.key);
        })
    }
}

export default GoldenLayoutManager;