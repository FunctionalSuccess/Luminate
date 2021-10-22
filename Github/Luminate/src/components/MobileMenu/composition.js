/* THIS FILE WAS AUTOGENERATED BY CLUTCH. DO NOT EDIT. */
import React from 'react';
import * as b from '@clutch-creator/bridge';
import Box from '../Box';
import State from '@clutch-marketplace/logic/dist/cjs/components/State';
import Element from '@clutch-marketplace/element/dist/cjs/components/Element';
import IconButton from '../IconButton';
import Icon from '../Icon';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import Text from '@clutch-marketplace/web-elements/dist/cjs/components/Text';

export default (props) => {
    const [report, getKey] = b.useReport(props);
    const { variants } = props;
    const variables = {};
  
    const rs = report(null, '17c585ab0d414c88a003300e', 'COMPOSITION', props, variables);
  
    return ([
      <Box
        key='box-4'
        variants={b.getVariants(undefined)}
        sx={{
          display: {
          xs: 'flex',
          md: 'none',
        },
        }}
        data-d={getKey(rs, '17c52f13ea514c88a0033130')}
      >
        <State
          key='state-mobileMenu'
          variants={b.getVariants(undefined)}
          initialValue={undefined}
          data-d={getKey(rs, '17c5829415314c88a0033001')}
        >
          {((r, v) => (...statemobileMenuArgs) => {
            const newVariables = {};
          
            let variables = {
              ...v,
              ...newVariables
            };
          
            const rs = report(r, '17c5829415314c88a0033001', '178bf970a34fae252001bf06', statemobileMenuArgs, newVariables);
          
            const renderFn = [
              <Element
                key='void-element-with-children-1'
                variants={b.getVariants(undefined)}
                tag={'div'}
                id={'menu-icon-id'}
                class={'menu-icon-class'}
                data-d={getKey(rs, '17c5d5799f714c88a0033000')}
              >
                <IconButton
                  key='icon-button-1'
                  variants={b.getVariants(undefined)}
                  onClick={b.tryCatch(() => ((event) => b.propertyBind(statemobileMenuArgs, ['0','setState'])(event.currentTarget)))}
                  data-d={getKey(rs, '17c51cc089014c88a0033017')}
                >
                  <Icon
                    key='icon-menu'
                    variants={b.getVariants(undefined)}
                    fontSize={'large'}
                    sx={{
                      color: '#ffffff',
                    }}
                    data-d={getKey(rs, '17c51cca62614c88a003301c')}
                  >
                    {'menu'}
                  </Icon>
                </IconButton>
                <Menu
                  key='menu-1'
                  variants={b.getVariants(undefined)}
                  open={b.tryCatch(() => (Boolean(b.propertyBind(statemobileMenuArgs, ['0','state']))))}
                  autoFocus={undefined}
                  classes={b.getUniqueClassName()}
                  disableAutoFocusItem={undefined}
                  MenuListProps={undefined}
                  onClose={b.tryCatch(() => (() => b.propertyBind(statemobileMenuArgs, ['0','setState'])('')))}
                  PopoverClasses={undefined}
                  transitionDuration={undefined}
                  TransitionProps={undefined}
                  variant={undefined}
                  anchorEl={b.tryCatch(() => (b.propertyBind(statemobileMenuArgs, ['0','state'])))}
                  getContentAnchorEl={'null'}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    horizontal: 'center',
                  }}
                  data-d={getKey(rs, '17c530df43914c88a003313f')}
                >
                  <MenuItem
                    key='menu-item-3'
                    variants={b.getVariants(undefined)}
                    autoFocus={undefined}
                    classes={b.getUniqueClassName()}
                    component={undefined}
                    dense={undefined}
                    disableGutters={undefined}
                    divider={undefined}
                    focusVisibleClassName={undefined}
                    sx={undefined}
                    data-d={getKey(rs, '17c57fe57b814c88a003308a')}
                  >
                    <Text
                      key='default-text-22'
                      variants={b.getVariants(undefined)}
                      className={b.getUniqueClassName()}
                      style={undefined}
                      text={'Providers'}
                      tag={'span'}
                      data-d={getKey(rs, '17c57ffba7914c88a0033091')}
                    />
                  </MenuItem>
                  <MenuItem
                    key='menu-item-7'
                    variants={b.getVariants(undefined)}
                    autoFocus={undefined}
                    classes={b.getUniqueClassName()}
                    component={undefined}
                    dense={undefined}
                    disableGutters={undefined}
                    divider={undefined}
                    focusVisibleClassName={undefined}
                    sx={undefined}
                    data-d={getKey(rs, '17c58000e5714c88a0033099')}
                  >
                    <Text
                      key='default-text-26'
                      variants={b.getVariants(undefined)}
                      className={b.getUniqueClassName()}
                      style={undefined}
                      text={'Courses'}
                      tag={'span'}
                      data-d={getKey(rs, '17c58000e5714c88a003309a')}
                    />
                  </MenuItem>
                  <MenuItem
                    key='menu-item-6'
                    variants={b.getVariants(undefined)}
                    autoFocus={undefined}
                    classes={b.getUniqueClassName()}
                    component={undefined}
                    dense={undefined}
                    disableGutters={undefined}
                    divider={undefined}
                    focusVisibleClassName={undefined}
                    sx={undefined}
                    data-d={getKey(rs, '17c58000cf714c88a0033097')}
                  >
                    <Text
                      key='default-text-25'
                      variants={b.getVariants(undefined)}
                      className={b.getUniqueClassName()}
                      style={undefined}
                      text={'Media'}
                      tag={'span'}
                      data-d={getKey(rs, '17c58000cf714c88a0033098')}
                    />
                  </MenuItem>
                  <MenuItem
                    key='menu-item-5'
                    variants={b.getVariants(undefined)}
                    autoFocus={undefined}
                    classes={b.getUniqueClassName()}
                    component={undefined}
                    dense={undefined}
                    disableGutters={undefined}
                    divider={undefined}
                    focusVisibleClassName={undefined}
                    sx={undefined}
                    data-d={getKey(rs, '17c5800052414c88a0033095')}
                  >
                    <Text
                      key='default-text-24'
                      variants={b.getVariants(undefined)}
                      className={b.getUniqueClassName()}
                      style={undefined}
                      text={'Resources'}
                      tag={'span'}
                      data-d={getKey(rs, '17c5800052414c88a0033096')}
                    />
                  </MenuItem>
                  <MenuItem
                    key='menu-item-4'
                    variants={b.getVariants(undefined)}
                    autoFocus={undefined}
                    classes={b.getUniqueClassName()}
                    component={undefined}
                    dense={undefined}
                    disableGutters={undefined}
                    divider={true}
                    focusVisibleClassName={undefined}
                    sx={undefined}
                    data-d={getKey(rs, '17c5800032414c88a0033093')}
                  >
                    <Text
                      key='default-text-23'
                      variants={b.getVariants(undefined)}
                      className={b.getUniqueClassName()}
                      style={undefined}
                      text={'Events'}
                      tag={'span'}
                      data-d={getKey(rs, '17c5800032414c88a0033094')}
                    />
                  </MenuItem>
                  <MenuItem
                    key='menu-item-1'
                    variants={b.getVariants(undefined)}
                    autoFocus={undefined}
                    classes={b.getUniqueClassName()}
                    component={undefined}
                    dense={undefined}
                    disableGutters={undefined}
                    divider={undefined}
                    focusVisibleClassName={undefined}
                    sx={undefined}
                    data-d={getKey(rs, '17c57f193bb14c88a0033030')}
                  >
                    <Icon
                      key='icon-menu-3'
                      variants={b.getVariants(undefined)}
                      color={'inherit'}
                      fontSize={'large'}
                      component={undefined}
                      sx={{
                        'margin-right': '6px',
                      }}
                      data-d={getKey(rs, '17c5cfe089814c88a003303e')}
                    >
                      <Text
                        key='default-text-28'
                        variants={b.getVariants(undefined)}
                        className={b.getUniqueClassName()}
                        style={undefined}
                        text={'account_circle'}
                        tag={undefined}
                        data-d={getKey(rs, '17c5cfe089814c88a003303f')}
                      />
                    </Icon>
                    <Text
                      key='default-text-21'
                      variants={b.getVariants(undefined)}
                      className={b.getUniqueClassName()}
                      style={undefined}
                      text={'Profile'}
                      tag={'span'}
                      data-d={getKey(rs, '17c57ff39c014c88a003308d')}
                    />
                  </MenuItem>
                  <MenuItem
                    key='menu-item-2'
                    variants={b.getVariants(undefined)}
                    autoFocus={undefined}
                    classes={b.getUniqueClassName()}
                    component={undefined}
                    dense={undefined}
                    disableGutters={undefined}
                    divider={undefined}
                    focusVisibleClassName={undefined}
                    sx={undefined}
                    data-d={getKey(rs, '17c5cfbfc5d14c88a0033027')}
                  >
                    <Icon
                      key='icon-menu-2'
                      variants={b.getVariants(undefined)}
                      color={'inherit'}
                      fontSize={undefined}
                      component={undefined}
                      sx={{
                        'margin-right': '6px',
                      }}
                      baseClassName={undefined}
                      data-d={getKey(rs, '17c5cfc688214c88a003302d')}
                    >
                      <Text
                        key='default-text-20'
                        variants={b.getVariants(undefined)}
                        className={b.getUniqueClassName()}
                        style={undefined}
                        text={'settings'}
                        tag={undefined}
                        data-d={getKey(rs, '17c5cfc688214c88a003302e')}
                      />
                    </Icon>
                    <Text
                      key='default-text-27'
                      variants={b.getVariants(undefined)}
                      className={b.getUniqueClassName()}
                      style={undefined}
                      text={'Settings'}
                      tag={'span'}
                      data-d={getKey(rs, '17c5cfbfc5d14c88a003302a')}
                    />
                  </MenuItem>
                </Menu>
              </Element>
            ];
          
            return typeof renderFn === 'function' ? renderFn(...statemobileMenuArgs) : renderFn;
          })(rs, variables)}
        </State>
      </Box>
    ]);
  };
  ;
