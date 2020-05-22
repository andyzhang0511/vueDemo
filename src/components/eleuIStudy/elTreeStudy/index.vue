<template>
    <div id="app">
    <h1>el-tree树形组件</h1>
    <!-- show-checkbox 节点是否可被选择 默认false -->
    <!-- check-strictly 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false -->
    <!-- node-key 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 -->
    <!-- data 展示数据 -->
    <!-- default-checked-keys 默认勾选的节点的 key 的数组 -->
    <!-- default-expanded-keys 默认展开的节点的 key 的数组 -->
    <!-- props 配置见表 -->
    <!-- node-click 节点被点击时的回调 -->
    <!-- check-change 节点选中状态发生变化时的回调 -->
        <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2,3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
            @node-click="handleTreeNodeClick">
        </el-tree>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
//   methods: {
//     // 节点被点击时的回调(点击文字未点击勾选框  生效)
//     handleTreeNodeClick (data, node) {
//       console.log(data)
//       console.log(node)
//       node.checked = !node.checked
//       if (node.expanded === false) { // 展开节点
//         node.expanded = true
//       } else { // 关闭节点
//         this.changeChildNode(node)
//         this.changeParentNode(node)
//       }
//     },
//     // 父级关闭节点，子级节点也要跟着关闭
//     changeChildNode (node) {
//       console.log(node)
//       node.childNodes.forEach(childnode => {
//         if (!node.checked) {
//           childnode.checked = false
//           this.changeChildNode(childnode) // 递归处理
//         } else {
//           childnode.checked = true
//           this.changeChildNode(childnode)
//         }
//       })
//     },
//     // 当父级节点选中了，修改子孙节点也都为选中 1
//     changeParentNode (node) {
//       if (node.checked && node.parent) {
//         node.parent.checked = true
//         this.changeParentNode(node.parent)
//       } else if (node.parent) {
//         let flag = false
//         node.parent.childNodes.forEach(child => {
//           if (child.checked === true) {
//             flag = true
//           }
//         })
//         node.parent.checked = flag
//       }
//     }
//   }
}
</script>
