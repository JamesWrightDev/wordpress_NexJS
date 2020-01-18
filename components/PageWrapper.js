import React from 'react';

const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      const menu = await fetch('https://jameswrightdev.co.uk/wp-json/menus/v1/menus/main-navigation');
      const menuData = await menu.json();
      return {
        menuData,

      };
    }

    render() {
      return <Comp {...this.props.menuData} />;
    }
  };

export default PageWrapper;