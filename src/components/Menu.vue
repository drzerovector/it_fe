<template>
    <div class="menu">
      <h2></h2>
      <h2></h2>

      <button id="sort-button">
        <i class="fas fa-sort"></i>
        SORT
      </button>

      <h2></h2>

      <div class="links-container">
        <a href="#">NOTE1</a>
        <a href="#">NOTE2</a>
        <a href="#">NOTE3</a>
        <a href="#">NOTE4</a>
        <a href="#">NOTE5</a>
        <a href="#">NOTE6</a>
        <a href="#">NOTE7</a>
        <a href="#">NOTE8</a>
        <a href="#">NOTE9</a>
        <a href="#">NOTE10</a>
        <a href="#">NOTE11</a>
        <a href="#">NOTE12</a>
        <a href="#">NOTE13</a>
        <a href="#">NOTE14</a>
        <a href="#">NOTE15</a>
        <a href="#">NOTE16</a>
        <a href="#">NOTE17</a>
        <a href="#">NOTE18</a>
        <a href="#">NOTE19</a>
        <a href="#">NOTE20</a>
        <a href="#">NOTE21</a>
        <a href="#">NOTE22</a>
        <a href="#">NOTE23</a>
        <a href="#">NOTE24</a>
        <a href="#">NOTE25</a>
        <a href="#">NOTE26</a>
        <a href="#">NOTE27</a>
        <a href="#">NOTE28</a>
        <a href="#">NOTE29</a>
        <a href="#">NOTE30</a>
      </div>

      <div class="btn-container">
        <button>
          <svg aria-label="File" aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-file color-fg-muted">
            <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"></path>
          </svg>
          NOTE
        </button>

        <button>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          BIN
        </button>
      </div>

    </div>

</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
/* 设置菜单样式 */
.menu {
  height: 100%;
  width: 200px;
  background-color: #2377b3;
  color: #fff;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  /* z-index: 9999; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 设置菜单标题样式 */
.menu h2 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

/* 设置菜单链接容器样式 */
.menu .links-container {
  height: calc(100% - 170px);
  overflow-y: auto;
  margin-bottom: 10px;
}

/* 设置菜单链接样式 */
.menu a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 3px;
}

/* 设置菜单链接悬停状态样式 */
.menu a:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

/* 设置菜单底部按钮容器样式 */
.menu .btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
}

/* 设置菜单底部按钮样式 */
.menu button {
  flex: 1;
  background-color: #fff;
  color: #000000;
  border: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3px;
  cursor: pointer;
}

/* 设置菜单底部按钮悬停状态样式 */
.menu button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* 设置链接和按钮之间的分隔线样式 */
.menu hr {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  margin: 10px 0;
}
</style>