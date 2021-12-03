interface Children {
  id?: string | undefined;
  name: string;
  value: string;
  childrens: Component[];
}

interface Component {
  id?: string | undefined;
  name: string;
  value: string;
  childrens: Children[];
}

interface Tree {
  root: Component[];
}

const generateUniqueId = () => {
  return `_${Math.random().toString(36).substr(2, 9)}`;
};

interface NodeStatement {
  setParentNode: (p: Component) => any;
  setChildren: (
    parentId: string | undefined,
    children: Component,
    nestedTree: undefined | Component[]
  ) => any;
  editNode: (
    parentId: string,
    newData: { key: keyof Component; newValue: any },
    nestedTree: undefined | Component[]
  ) => any;
  deleteNode: (parentId: string, nestedTree: undefined | Component[]) => any;
  tree: Tree;
}

function DocumentShadow(value: Component): any {
  const tree = <Tree>{ root: [] };

  const setParentNode = (parent: Component) => {
    tree.root.push({ ...parent, id: generateUniqueId() });
  };

  setParentNode(value);

  const setChildren = (
    parentId: string,
    children: Component,
    nestedTree: undefined | Component[]
  ) => {
    if (nestedTree) {
      nestedTree.forEach((item) => {
        if (item.id === parentId) {
          item.childrens.push({ ...children, id: generateUniqueId() });
        } else {
          setChildren(parentId, children, item.childrens);
        }
      });
      return { ...tree };
    }
    tree.root.forEach((item) => {
      if (item.id === parentId) {
        item.childrens.push({ ...children, id: generateUniqueId() });
      } else {
        setChildren(parentId, children, item.childrens);
      }
    });
    return { ...tree };
  };

  const editNode = (
    parentId: string,
    newData: { key: keyof Component; newValue: any },
    nestedTree: undefined | Component[]
  ) => {
    if (nestedTree) {
      nestedTree.forEach((item) => {
        if (item.id === parentId) {
          // eslint-disable-next-line no-param-reassign
          item[newData.key] = newData.newValue;
        } else {
          editNode(parentId, newData, item.childrens);
        }
      });
      return { ...tree };
    }
    tree.root.forEach((item) => {
      if (item.id === parentId) {
        // eslint-disable-next-line no-param-reassign
        item[newData.key] = newData.newValue;
      } else {
        editNode(parentId, newData, item.childrens);
      }
    });
    return { ...tree };
  };

  const deleteNode = (
    parentId: string,
    nestedTree: undefined | Component[]
  ) => {
    if (nestedTree) {
      const isNestedTreIndex = nestedTree.findIndex(
        (nestedTreeIndex) => nestedTreeIndex.id === parentId
      );
      if (isNestedTreIndex >= 0) {
        tree.root.splice(isNestedTreIndex, 1);
        return { ...tree };
      }

      nestedTree.forEach((nestedItem) => {
        const isChildrenToDeleteIndex = nestedItem.childrens.findIndex(
          (childElement) => childElement.id === parentId
        );

        if (isChildrenToDeleteIndex >= 0) {
          nestedItem.childrens.splice(isChildrenToDeleteIndex, 1);
          return { ...tree };
        }
        deleteNode(parentId, nestedItem.childrens);
        return { ...tree };
      });
      return { ...tree };
    }

    const isRootIndex = tree.root.findIndex(
      (rootIndex) => rootIndex.id === parentId
    );

    if (isRootIndex >= 0) {
      tree.root.splice(isRootIndex, 1);
      return { ...tree };
    }

    tree.root.forEach((item) => {
      const isChildrenToDeleteIndex = item.childrens.findIndex(
        (childElement) => childElement.id === parentId
      );

      if (isChildrenToDeleteIndex >= 0) {
        item.childrens.splice(isChildrenToDeleteIndex, 1);
        return { ...tree };
      }
      deleteNode(parentId, item.childrens);

      return { ...tree };
    });

    tree.root.forEach(() => {});

    return { ...tree };
  };

  return {
    setParentNode,
    setChildren,
    editNode,
    deleteNode,
    tree,
  };
}

export default DocumentShadow;
