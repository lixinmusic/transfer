var paik = new Vue({
  el: "#paik",
  data() {
    return {
      tableData: [
        {
          ruleChildId: 1,
          date: "2016-05-02",
          name: "王小",
          address: "上海市",
          ruleChildType:1
        },
        {
          ruleChildId: 2,
          date: "2016-05-04",
          name: "王虎",
          address: "上海市",
            ruleChildType:1
        },
        {
          ruleChildId: 3,
          date: "2016-05-01",
          name: "李三",
          address: "上海",
            ruleChildType:1
        },
        {
          ruleChildId: 4,
          date: "2016-05-03",
          name: "武义",
          address: "上海市",
            ruleChildType:1,
        },
        {
          ruleChildId: 5,
          date: "2016-05-03",
          name: "王大",
          address: "上海市普陀区",
            ruleChildType:2,
        },
        {
          ruleChildId: 6,
          date: "2016-05-03",
          name: "张媛",
          address: "上海",
            ruleChildType:3,
        },
        {
          ruleChildId: 7,
          date: "2016-05-03",
          name: "肖战",
          address: "上海市普陀",
            ruleChildType:4,

        },
        {
          ruleChildId: 8,
          date: "2016-05-03",
          name: "凯立",
          address: "上海市",
            ruleChildType:1,
        },
        {
          ruleChildId: 9,
          date: "2016-05-03",
          name: "尚武",
          address: "上海市普",
          ruleChildType:1,
        },
        {
          ruleChildId: 10,
          date: "2016-05-03",
          name: "溥仪",
          address: "上海市普",
            ruleChildType:1,
        }
      ],
      orderNum:null,
      selectArr: [], // 右边列表
      nowSelectData: [], // 左边选中列表数据
      nowSelectRightData: [] // 右边选中列表数据
    };
  },
  created() {},
  methods: {
    checkAll(val) {
      this.nowSelectData = val;
    },
    checkRightAll(val, row) {

      },
    checkRightAll1(val, row) {
        if (val.length > 1) {
            this.$refs.selection.clearSelection()
            val.shift()
            this.$refs.selection.toggleRowSelection(row)
        } else {
            this.nowSelectRightData = val;
            console.log(this.selectArr);
             this.selectArr.forEach((item, index) => {
                item.orderNum = index
                this.nowSelectRightData.forEach(spot => {
                    if (item.orderNum == spot.orderNum) {
                        this.orderNum = spot.orderNum
                    }
                })
            })
        }
        
      },
    // 右移
    handelSelect() {
        this.nowSelectData.forEach(item => {
            this.selectArr.push(JSON.parse(JSON.stringify(item)))
            this.$refs.selection1.clearSelection()
            this.nowSelectData = []
        })
    },
    // 上移
    moveTop() {
        if (this.orderNum == 0) {
            this.$message({
                message: '已经是列表中第一行!',
                type: 'warning'
            })
            this.$refs.selection.clearSelection()
            this.nowSelectRightData = []
            this.orderNum = null
            return
        }else{  
        const temp = this.selectArr[this.orderNum - 1]
        Vue.set(this.selectArr, this.orderNum - 1, this.selectArr[this.orderNum])
        Vue.set(this.selectArr, this.orderNum, temp)
        this.$refs.selection.clearSelection()
        this.nowSelectRightData = []
        }
    },
    // 下移
    moveDown() {
        if (this.orderNum == (this.selectArr.length - 1)) {
            this.$message({
                message: '已经是列表中第一行!',
                type: 'warning'
            })
            this.$refs.selection.clearSelection()
            this.nowSelectRightData = []
            this.orderNum = null
            return
        } else {
            const po = this.selectArr[this.orderNum + 1]
            Vue.set(this.selectArr, this.orderNum + 1, this.selectArr[this.orderNum])
            Vue.set(this.selectArr, this.orderNum, po);
            this.$refs.selection.clearSelection()
            this.nowSelectRightData = []
        }
    },
    // 删除
    handleRemoveSelect(){
        const i = this.$refs.selection.selection[0].orderNum
        if (this.$refs.selection.selection) {
            this.selectArr.splice(i, 1)
            this.$refs.selection.clearSelection()
            this.nowSelectRightData = []
        }
    },
  }
});