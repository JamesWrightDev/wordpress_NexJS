import {Component} from 'react';

const PageWrapper = Comp =>
  class extends Component {
    // static async getInitialProps(args) {
    //   const menu = await fetch('https://jameswrightdev.co.uk/wp-json/menus/v1/menus/main-navigation');
    //   const menuData = await menu.json();
    //   return {
    //     menuData,

    //   };
    // }

    render() {
      return <Comp />;
    }
  };

export default PageWrapper;