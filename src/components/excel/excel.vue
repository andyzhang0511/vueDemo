<template>
    <div>
        <el-table id="excel-table" v-loading="loading" ref="filterTable" :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="Id" sortable width="80"></el-table-column>
            <el-table-column prop="date" label="日期" sortable width="180" column-key="date" :formatter="fmtTime">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
            <el-table-column prop="tag" label="标签" width="100"
                :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="dialogFormVisible = true" size="mini" type="primary">Edit</el-button>
                    <el-button @click="del(scope.row.id)" size="mini" type="danger">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download"
            @click="handleDownload">Export</el-button>
    </div>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data () {
    return {
      loading: false,
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          id: 5,
          date: '2016-04-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }
      ]

    }
  },
  methods: {
    handleDownload () {
            // this.downloadLoading = true;
            import('@/vendor/Export2Excel').then(excel => {
              const tHeader = ['id', 'date', 'name', 'address', 'tag']// 要导出后表头是什么，可以跟tableDate中的表头不一致
              const filterVal = [
                'id',
                'date',
                'name',
                'address',
                'tag'
              ]
              const data = this.formatJson(filterVal, this.tableData)

              // const data = this.tableData;
              excel.export_json_to_excel({
                header: tHeader,
                data,
                filename: 'table-list' // 导出文件的名，自定义就好
              })
              // this.downloadLoading = false;
            })
    },
    // 下载方法中，需要用到的格式化json的方法
    formatJson (filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === 'id') { // 此处如没有要格式化的列，可以不用此判断
            // return parseTime(v[j])
            return v[j]
          } else {
            return v[j]
          }
        })
      )
    }

  }
}
</script>

<style>
</style>
