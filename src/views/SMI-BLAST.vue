<template>
  <div class="blast">
    <div class="section-title">
      <h2>Server / SMI-BLAST</h2>
    </div>
    <el-divider />
    <div class="content">
      <el-form label-position="top" label-width="100px" :model="formLabelAlign" style="max-width: 800px">
        <el-form-item label="1. Enter the query protein sequences in FASTA format:">
          <el-input type="textarea" v-model="formLabelAlign.fasta" />
        </el-form-item>
        <el-upload ref="upload" class="upload-demo" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :limit="1" :auto-upload="false">
          <strong>OR</strong> upload your input file
          <template #trigger>
            <el-button type="primary">select file</el-button>
          </template>
        </el-upload>
        Examples:
        <el-button type="primary" plain>True-PSSM</el-button>
        <el-button type="primary" plain>ISH-MIX</el-button>
        <el-button type="primary" plain>ISH-ALL</el-button>
        <el-button type="primary" plain>ISH-NULL</el-button>
        <el-button type="primary" plain>COVID-19 related protein</el-button>
      </el-form>
      <br>
      <el-form label-position="left" label-width="250px" :model="formLabelAlign" style="max-width: 800px">

        <el-form-item label="Please select the number of iteration:">
          <el-select v-model="formLabelAlign.iter" class="m-2" placeholder="Select">
            <el-option v-for="item in iteration" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="Please select the cutoff of results:">
          <el-select v-model="formLabelAlign.cut" class="m-2" placeholder="Select">
            <el-option v-for="item in cutoff" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="Please select database:">
          <el-radio-group v-model="formLabelAlign.database" class="ml-4">
            <el-radio label="1" size="large">SCOPe 2.06 database</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Be notified by email  (optional):">
          <el-input v-model="email" />
        </el-form-item>
        <div class="btn">
          <el-button type="success">Reset</el-button>
          <el-button type="primary">Submit</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
const email = ref('')
const formLabelAlign = reactive({
  fasta: "",
  iter: "",
  cut: "",
  database: "1"
});
// iteration
const iteration = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '10',
    label: '10',
  },
]
// cutoff 
const cutoff = [
  {
    value: 'None',
    label: 'None',
  },
  {
    value: '-5',
    label: '-5',
  },
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
]
</script>

<style scoped>
.el-form {
  margin: auto;
}

.btn {
  text-align: center;
}

:deep(.el-textarea__inner) {
  line-height: 1.5;
  height: 120px;
}
</style>