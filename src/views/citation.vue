<template>
  <div class="citation">
    <div class="section-title">
      <h2>Citation</h2>
    </div>
    <el-divider />
    <div class="content">
      <div class="contentmsg">
        <h2>Please cite the following papers when using the server and data at this website:</h2>
        <ul>
          <li>1. Liu B, et al.: <strong>Application of Learning to Rank to protein remote homology detection.</strong>
            Bioinformatics 2015,
            31(21):3492-3498. (PMID: 26163693)</li>
          <li>2. Chen J, et al.: <strong>ProtDec-LTR2. 0: An improved method for protein remote homology detection by
              combining
              pseudo protein and supervised Learning to Rank.</strong> Bioinformatics 2017, 33(21):3473-3476. (PMID:
            2907780)</li>
          <li>3. Jin X,, et al.: <strong>SMI-BLAST: a novel supervised search framework based on PSI-BLAST for protein
              remote
              homology detection. Bioinformatics, DOI: 10.1093/bioinformatics/btaa772</strong></li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script setup>
</script>
  
<style scoped>
.citation {
  text-align: left;
}

.content {
  margin: auto;
  width: 1200px;
}

ul>li,
ol>li,
p {
  line-height: 1.8;
}
</style>