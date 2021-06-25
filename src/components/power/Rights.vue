<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card>
      nihao
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 列表权限
      rightList: [],
    }
  },
  created() {
    //   获取所有的权限
    this.getRightList()
  },
  methods: {
    //获取权限列表
    async getRightList() {
      const{ data: res} =await this.$http.get("rights/list")
      if(res.meta.status!==200) {
return this.$message.error("获取Q")
      }
    },
  },
}
</script>

<style scoped></style>
