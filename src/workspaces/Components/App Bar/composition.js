/* THIS FILE WAS AUTOGENERATED BY CLUTCH. DO NOT EDIT. */
import React from 'react';
import * as b from '@clutch-creator/bridge';
import HelmetLink from '@clutch-marketplace/helmet/dist/cjs/components/HelmetLink';
import Icon from '../../../components/Icon';

export default (props) => {
    const [report, getKey] = b.useReport(props);
    const { variants } = props;
    const variables = {};
  
    const rs = report(null, '17c485883d114c88a003303d', 'COMPOSITION', props, variables);
  
    return ([
      <HelmetLink
        key='font-icons-1'
        variants={b.getVariants(undefined)}
        rel={'stylesheet'}
        href={'https://fonts.googleapis.com/icon?family=Material+Icons'}
        data-d={getKey(rs, '17c95c0276a14c88a0033050')}
      />,
      <Icon
        key='icon-16'
        variants={b.getVariants(undefined)}
        sx={{
          color: 'grey.800',
        }}
        icon={'chevron_left'}
        data-d={getKey(rs, '17c95ba521c14c88a003304b')}
      >
        {null}
      </Icon>
    ]);
  };
  ;
