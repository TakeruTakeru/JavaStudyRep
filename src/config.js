const GoldenLayoutConfig = {
  settings: {
    hasHeaders: true,
    constrainDragToContainer: true,
    reorderEnabled: true,
    selectionEnabled: true,
    popoutWholeStack: false,
    blockedPopoutsThrowError: true,
    closePopoutsOnUnload: true,
    showPopoutIcon: true,
    showMaximiseIcon: true,
    showCloseIcon: true
  },
  dimensions: {
    borderWidth: 10,
    minItemHeight: 50,
    minItemWidth: 50,
    headerHeight: 20,
    dragProxyWidth: 300,
    dragProxyHeight: 200
  },
  labels: {
    close: "close",
    maximise: "maximise",
    minimise: "minimise",
    popout: "open in new window"
  },
  content: [
    {
      type: "row",
      isClosable: false,
      content: []
    }
  ]
};

export { GoldenLayoutConfig };