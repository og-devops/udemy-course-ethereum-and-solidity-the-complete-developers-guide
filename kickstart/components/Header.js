import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">ulogcoin</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
//jsx: manual java injection with "object literal".
/*
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route='/'>
        <a className="item">
          ulogcoin
        </a>
      </Link>
      //<Menu.Item>ulogcoin</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          Campaigns
        </Menu.Item>

        <Menu.Item>
          +
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    //<Menu.item></Menu.item>
  );
};
*/
