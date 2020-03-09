<script>
  import { Link } from "svelte-routing";
</script>

<style lang="less" global>
  @import "../styles/common.less";

  header {
    background: #fff;
    height: 54px;
    width: 100%;
    box-shadow: 0 5px 10px 0 #ddd;
    border-top: 4px solid @primary;
    .inner {
      max-width: 1400px;
      width: 90%;
      margin: auto;
      .logo {
        padding: 5px;
        padding-left: 0;
        float: left;
        color: #333;
        img {
          width: 40px;
          height: 40px;
          display: block;
          float: left;
          margin-right: 10px;
        }
        span {
          display: block;
          float: left;
          line-height: 40px;
          font-size: 20px;
        }
      }
      nav {
        float: right;
        a {
          display: block;
          float: left;
          padding: 0px 15px;
          display: block;
          font-size: 14px;
          line-height: 50px;
          font-style: normal;
          text-decoration-line: none;
          color: #888;
          &:hover {
            color: #000;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    header {
      height: auto;
      overflow: hidden;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #ddd;
        * {
          clear: both;
        }
      }
      .inner {
        font-size: 0;
        text-align: center;
        nav {
          clear: both;
          float: none;
          display: inline-block;
          margin: auto;
          overflow: hidden;
          a {
            line-height: 40px;
          }
        }
      }
    }
  }
</style>

<header>
  <div class="inner">
    <a href="/" class="logo">
      <img src="/imgs/logo.svg" alt="logo" />
      <span>DENO中文社区</span>
    </a>
    <nav>
      <Link to="/">首页</Link>
      <Link to="/getting-start">新手入门</Link>
      <a href="https://deno.land/" target="_blank" rel="noopener noreferrer">
        官网
      </a>
      <Link to="/about">关于</Link>
      <a href="/api/user/login">登录</a>
    </nav>
  </div>
</header>
