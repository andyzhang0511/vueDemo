<template>
  <div id="mapid" style="height: 1000px"></div>
</template>

<script>
import L from 'leaflet'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      var mymap = L.map('mapid').setView([23, 113], 9)
      L.tileLayer('http://192.168.0.130/roadmap/{z}/{x}/{y}.png', { // eg  Request URL: http://192.168.0.130/roadmap/9/416/222.png
        maxZoom: 18,
        id: 'mapbox.streets'
      }).addTo(mymap)

      // 增加一个圆圈，设置圆心、半径、样式
      L.circle([23, 113], {
        color: 'green',
        fillColor: 'gray', // 填充颜色
        fillOpacity: 0.5, // 透明度
        radius: 10000 // 半径
      }).addTo(mymap)

      // 绘制三角形 bindPopup为图形添加弹出窗口
      L.polygon([
        [23, 113.2],
        [23, 113.4],
        [23.5, 113.6]
      ]).addTo(mymap).bindPopup('I am a polygon.')

      // 增加一个marker ，地图上的标记。bindPopup为图形添加弹出窗口，并绑定了一个popup，默认打开
      L.marker([23, 114]).addTo(mymap).bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup()

      // 为点击地图的事件 增加popup 这个事件是点击地图显示当前经纬度
      var popup = L.popup()
      function onMapClick (e) {
        popup.setLatLng(e.latlng).setContent('You clicked the map at ' + e.latlng.toString()).openOn(mymap)
      }
      mymap.on('click', onMapClick)

      //  动态绘点就是在鼠标点击位置添加一个固定半径的圆
      //   mymap.on('click', function (e) {
      //     L.circle(e.latlng, {radius: 5000, color: 'red', fillColor: 'red', fillOpacity: 1}).addTo(mymap)
      //   })

      // 动态绘圆
      //   var r = 0
      //   var i = null
      //   // eslint-disable-next-line new-cap
      //   var tempCircle = new L.circle()

      //   mymap.on('mousedown', onmouseDown)
      //   mymap.on('mouseup', onmouseUp)
      //   mymap.on('mousemove', onMove)

      //   // map.off(....) 关闭该事件

      //   function onmouseDown (e) {
      //     i = e.latlng
      //     // 确定圆心
      //   }
      //   function onMove (e) {
      //     if (i) {
      //       r = L.latLng(e.latlng).distanceTo(i)
      //       tempCircle.setLatLng(i)
      //       tempCircle.setRadius(r)
      //       tempCircle.setStyle({color: '#ff0000', fillColor: '#ff0000', fillOpacity: 1})
      //       mymap.addLayer(tempCircle)
      //     }
      //   }

      //   function onmouseUp (e) {
      //     r = L.latLng(e.latlng).distanceTo(i)// 计算半径
      //     L.circle(i, {radius: r, color: '#ff0000', fillColor: '#ff0000', fillOpacity: 1}).addTo(mymap)
      //     i = null
      //     r = 0
      //   }

      // 动态绘线
      //   var points = []
      //   var geometry = []
      //   // eslint-disable-next-line new-cap
      //   var lines = new L.polyline(points)
      //   // eslint-disable-next-line new-cap
      //   var tempLines = new L.polyline([])
      //   mymap.on('click', onClick) // 点击地图
      //   mymap.on('dblclick', onDoubleClick)

      //   // map.off(....) 关闭该事件

      //   function onClick (e) {
      //     points.push([e.latlng.lat, e.latlng.lng])
      //     lines.addLatLng(e.latlng)
      //     mymap.addLayer(lines)
      //     const node = L.circle(e.latlng, { color: '#ff0000', fillColor: 'ff0000', fillOpacity: 1 })
      //     mymap.addLayer(node)
      //     geometry.push(node)
      //     mymap.on('mousemove', onMove)// 双击地图
      //   }
      //   function onMove (e) {
      //     if (points.length > 0) {
      //       // eslint-disable-next-line no-undef
      //       ls = [points[points.length - 1], [e.latlng.lat, e.latlng.lng]]
      //       tempLines.setLatLngs(ls)
      //       mymap.addLayer(tempLines)
      //     }
      //   }

      //   function onDoubleClick (e) {
      //     geometry.push(L.polyline(points).addTo(mymap))
      //     points = []
      //     lines.remove()
      //     mymap.off('mousemove')
      //     tempLines.remove()
      //   }

      //   动态绘多边形
      var points = []
      var geometry = []
      // eslint-disable-next-line new-cap
      var lines = new L.polyline([])
      // eslint-disable-next-line new-cap
      var tempLines = new L.polyline([], { dashArray: 5 })

      mymap.on('click', onClick) // 点击地图
      mymap.on('dblclick', onDoubleClick)
      mymap.on('mousemove', onMove)// 双击地图

      // map.off(....) 关闭该事件

      function onClick (e) {
        points.push([e.latlng.lat, e.latlng.lng])
        lines.addLatLng(e.latlng)
        mymap.addLayer(tempLines)
        mymap.addLayer(lines)
        const node = L.circle(e.latlng, { color: '#ff0000', fillColor: 'ff0000', fillOpacity: 1 })
        mymap.addLayer(node)
        geometry.push(node)
      }
      function onMove (e) {
        if (points.length > 0) {
          // eslint-disable-next-line no-undef
          ls = [points[points.length - 1], [e.latlng.lat, e.latlng.lng], points[0]]
          // eslint-disable-next-line no-undef
          tempLines.setLatLngs(ls)
          // map.addLayer(tempLines)
        }
      }

      function onDoubleClick (e) {
        geometry.push(L.polygon(points).addTo(mymap))
        points = []
        // map.removeLayer(tempLines)
        // tempLines.remove()
        lines.remove()
        tempLines.remove()
        // eslint-disable-next-line new-cap
        lines = new L.polyline([])
      }

      // 动态绘制矩形
      // eslint-disable-next-line no-tabs
      //   let rectangle
      //   let tmprec
      //   const latlngs = []
      //   mymap.on('mousedown', onClick) // 点击地图
      //   mymap.on('mouseup', onDoubleClick)

      //   // map.off(....) 关闭该事件
      //   function onClick (e) {
      //     if (typeof tmprec !== 'undefined') {
      //       tmprec.remove()
      //     }
      //     // 左上角坐标
      //     latlngs[0] = [e.latlng.lat, e.latlng.lng]
      //     // 开始绘制，监听鼠标移动事件
      //     mymap.on('mousemove', onMove)
      //   }
      //   function onMove (e) {
      //     latlngs[1] = [e.latlng.lat, e.latlng.lng]
      //     // 删除临时矩形
      //     if (typeof tmprect !== 'undefined') {
      //       // eslint-disable-next-line no-undef
      //       tmprect.remove()
      //     }
      //     // 添加临时矩形
      //     // eslint-disable-next-line no-undef
      //     tmprect = L.rectangle(latlngs, {dashArray: 5}).addTo(mymap)
      //   }

      //   function onDoubleClick (e) {
      //     // 矩形绘制完成，移除临时矩形，并停止监听鼠标移动事件
      //     // eslint-disable-next-line no-undef
      //     tmprect.remove()
      //     mymap.off('mousemove')
      //     // 右下角坐标
      //     latlngs[1] = [e.latlng.lat, e.latlng.lng]
      //     rectangle = L.rectangle(latlngs, {
      //       color: '#3300ff',
      //       fillOpacity: 0,
      //       weight: 2
      //     })
      //     rectangle.addTo(mymap)
      //     // 调整view范围

      //     mymap.fitBounds(latlngs)
      //   }
    }
  }
}
</script>

<style>

</style>
