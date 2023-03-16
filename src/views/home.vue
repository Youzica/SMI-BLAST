<template>
  <div class="home">
    <div class="section-title">
      <h2>About SMI-BLAST</h2>
    </div>
    <el-divider />
    <div class="content">
      <div class="item">
        <img src="../static/img/homepic1.png" alt="">
        <p>Figure 1. The flowchart of SMI-BLAST.</p>
      </div>
      <div class="contentmsg">
        <h2>SMI-BLAST: A novel supervised search framework based on PSI-BLAST for protein remote homology detection</h2>
        <ul>
          <li><strong>Motivation:</strong> As one of the most important and widely used mainstream iterative search tool
            for
            protein sequence
            search, an accurate Position Specific Scoring Matrix (PSSM) is the key of PSI-BLAST. However, for protein
            remote
            homology detection, more non-homologous sequences are detected by PSI-BLAST, because its PSSMs are constructed
            mainly based on the non-homologous sequences of the query protein.</li>
          <li><strong>Results:</strong> To uncover the reasons, we figured out three types of Incorrectly Selected
            Homology
            (ISH) errors in
            PSSMs. In order to solve these errors, a new search tool Supervised-Manner-based Iterative BLAST (SMI-BLAST)
            is
            proposed based on PSI-BLAST. SMI-BLAST obviously outperforms PSI-BLAST on the Structural Classification of
            Proteins-extended (SCOPe) dataset. Compared with PSI-BLAST on the ISH error subsets of SCOPe dataset,
            SMI-BLAST
            detects 1.6~2.87 folds more remote homologous sequences, and outperforms PSI-BLAST by 35.66% in terms of ROC1
            scores. Furthermore, this framework is applied to JackHMMER, DELTA-BLAST and PSIBLASTexB, the new predictors
            also obviously outperforms original search methods, proving the generality of the proposed SMI-based
            framework.
          </li>
        </ul>
      </div>
    </div>
    <div class="section-title">
      <h2>About Incorrectly Selected Homology(ISH)</h2>
    </div>
    <el-divider />
    <div class="content">
      <div class="item">
        <img src="../static/img/homepic2.png" alt="">
        <p>Figure 2. The five situations of PSI-BLAST selecting sequences to construct PSSM profile for protein remote
          homology detection.</p>
      </div>
      <div class="contentmsg">
        <p>To analyse the problems of PSSM on protein domain databases for protein remote homology detection, we summarize
          three situations as Incorrectly Selected Homology (ISH) errors from the results of PSI-BLAST. ISH errors
          indicate that true positives exist in the ranking list but the selected list is null or contains false
          positives. Figure 2 shows three types of ISH errors and other situations of PSSM:</p>
        <ol>
          <li>True-PSSM (Figure 2A). PSSM is constructed by all true positives in the selected list, which is an ideal
            situation for PSSM and can describe the correct evolutionary information of query sequences;</li>
          <li>ISH-MIX error (Figure 2B). Because the selected list contains false positives and true positives, incorrect
            evolutionary information is added into PSSM and more false positives are produced at later iterations;
          </li>
          <li>ISH-NULL error (Figure 2C). No sequence exists in the selected list can be used to construct PSSM but true
            positives exists in the candidate list. Therefore, PSI-BLAST almost cannot produce any results after the next
            iteration with null PSSM;</li>
          <li>ISH-ALL error (Figure 2D). The sequences in the selected list are all false positives but true positives
            exist in the candidate list. Then, error PSSM is constructed, which almost cannot detect any true positives at
            the next iteration;</li>
          <li>False-PSSM (Figure 2E). The ranking list contains no true positive, and therefore there is no more
            adjustment space for PSSM. In order to construct and keep an ideal situation during the iteration process,
            rectifying the above errors of PSSM is necessary.
          </li>
        </ol>
      </div>
    </div>
    <div class="section-title">
      <h2>Services</h2>
    </div>
    <el-divider />
    <br>
    <div class="contentbox">
      <div class="box" @click="router.push('/service/SMI-BLAST')">
        <Location style="width: 70px; height: 70px; margin-right: 8px" />
        <h3>SMI-BLAST</h3>
        <p>Appling smi-framework to psiblast</p>
      </div>
      <div class="box" @click="router.push('/service/SMI-HMMER')">
        <Location style="width: 70px; height: 70px; margin-right: 8px" />
        <h3>SMI-HMMER</h3>
        <p>Appling smi-framework to jackhmmer</p>
      </div>
      <div class="box" @click="router.push('/service/SMI-DELTABLAST')">
        <Location style="width: 70px; height: 70px; margin-right: 8px" />
        <h3>SMI-DELTABLAST</h3>
        <p>Appling smi-framework to deltablast</p>
      </div>
      <div class="box" @click="router.push('/service/SMI-PSIBLASTexB')">
        <Location style="width: 70px; height: 70px; margin-right: 8px" />
        <h3>SMI-PSIBLASTexB</h3>
        <p>Appling smi-framework to deltablast</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

</script>

<style scoped>
.home {
  text-align: left;
}

.content,
.contentbox {
  margin: auto;
  width: 1200px;
}

.item {
  text-align: center;
}

ul>li,
ol>li,
p {
  line-height: 1.8;
}

.box {
  width: 200px;
  height: 200px;
  /* border: 1px solid black; */
  margin: auto;
  background: linear-gradient(#fff, #e7e7e7);
}

.contentbox {
  display: flex;
  margin-bottom: 100px;
}

.box {
  border-radius: 10px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.box:hover,
.box:focus,
.box:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  cursor: pointer;
}

.box:hover h3 {
  color: #3c8dbc;
}</style>