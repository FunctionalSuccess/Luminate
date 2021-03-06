/* THIS FILE WAS AUTOGENERATED BY CLUTCH. DO NOT EDIT. */
import React from 'react';
import * as b from '@clutch-creator/bridge';
import Grid from '../Grid';
import Typography from '../Typography';
import Text from '@clutch-marketplace/web-elements/dist/cjs/components/Text';
import Hook from '@clutch-marketplace/logic/dist/cjs/components/Hook';
import ProviderScrollHookBaseHookModule from './logic/providerScrollHook/base-hookmodule.js';
import Box from '../Box';
import Icon from '../Icon';
import CardProviderHomepage from '../Card - Provider Homepage';
import CardHomepageEndCard from '../Card - Homepage End Card';

export default (props) => {
    const [report, getKey] = b.useReport(props);
    const { variants } = props;
    const variables = {};
  
    const rs = report(null, '17c851f2b2f14c88a00330e1', 'COMPOSITION', props, variables);
  
    return ([
      <Grid
        key='grid-providers-cards'
        variants={b.getVariants(undefined)}
        container={true}
        sx={{
          mb: 3,
        }}
        direction={'column'}
        item={true}
        xs={12}
        data-d={getKey(rs, '17c8062fbdc14c88a003300e')}
      >
        <Grid
          key='grid-38'
          variants={b.getVariants(undefined)}
          item={true}
          container={true}
          justifyContent={'space-between'}
          alignItems={'center'}
          data-d={getKey(rs, '17c900a477a14c88a00331ed')}
        >
          <Grid
            key='grid-62'
            variants={b.getVariants(undefined)}
            item={true}
            data-d={getKey(rs, '17c99d0ad3314c88a0033000')}
          >
            <Typography
              key='typography-8'
              variants={b.getVariants(undefined)}
              gutterBottom={false}
              variant={'h5'}
              sx={{
                fontWeight: '500',
                color: 'primary.main',
                fontSize: '1.75rem',
                lineHeight: {
                xs: '1.5',
                md: '1.75',
              },
              }}
              data-d={getKey(rs, '17c9a0b3d7714c88a0033121')}
            >
              <Text
                key='default-text-49'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'Providers'}
                tag={'span'}
                data-d={getKey(rs, '17c9a0b3d7714c88a0033122')}
              />
            </Typography>
          </Grid>
          <Grid
            key='grid-65'
            variants={b.getVariants(undefined)}
            item={true}
            data-d={getKey(rs, '17c99d0f21a14c88a0033008')}
          >
            <Typography
              key='typography-14'
              variants={b.getVariants(undefined)}
              gutterBottom={false}
              variant={'subtitle2'}
              sx={{
                fontWeight: '500',
                ':hover': {
                color: 'primary.dark',
              },
                color: 'primary.main',
              }}
              data-d={getKey(rs, '17c99da687414c88a0033031')}
            >
              <Text
                key='default-text-50'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'SEE MORE'}
                data-d={getKey(rs, '17c99da687414c88a0033032')}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          key='grid-39'
          variants={b.getVariants(undefined)}
          item={true}
          container={true}
          data-d={getKey(rs, '17c900a97c514c88a00331f5')}
        >
          <Hook
            key='providerScrollHook'
            variants={b.getVariants(undefined)}
            hookModule={ProviderScrollHookBaseHookModule}
            arguments={[]}
            data-d={getKey(rs, '17c854e375114c88a00331c1')}
          >
            {((r, v) => (...providerScrollHookArgs) => {
              const newVariables = {};
            
              let variables = {
                ...v,
                ...newVariables
              };
            
              const rs = report(r, '17c854e375114c88a00331c1', '1791eb63ceefae252001b80a', providerScrollHookArgs, newVariables);
            
              const renderFn = [
                <Grid
                  key='grid-125'
                  variants={b.getVariants(undefined)}
                  sx={{
                    overflow: 'auto',
                    display: 'flex',
                    ml: {
                    xs: -2,
                    sm: -5,
                    md: 0,
                  },
                    mr: {
                    xs: -2,
                    sm: -5,
                    md: 0,
                  },
                  }}
                  data-d={getKey(rs, '17ca49703fe14c88a00330fa')}
                >
                  <Grid
                    key='grid-40'
                    variants={b.getVariants(undefined)}
                    sx={{
                      width: '36px',
                      display: {
                      xs: 'none',
                      md: 'flex',
                    },
                    }}
                    item={true}
                    container={true}
                    data-d={getKey(rs, '17ca44c7c9414c88a0033073')}
                  >
                    <Box
                      key='box-9'
                      variants={b.getVariants(undefined)}
                      sx={{
                        width: 36,
                        backgroundColor: 'rgba(224, 224, 224, 0.7)',
                        borderRadius: 1,
                        display: {
                        xs: 'none',
                        md: 'flex',
                      },
                        alignItems: 'center',
                        justifyContent: 'center',
                        'z-index': '100',
                        mb: '5px',
                      }}
                      onClick={b.tryCatch(() => (() => b.propertyBind(providerScrollHookArgs, ['0','current']).scrollLeft -= 325))}
                      data-d={getKey(rs, '17c860c51d114c88a003300c')}
                    >
                      <Icon
                        key='icon-5'
                        variants={b.getVariants(undefined)}
                        sx={{
                          color: 'grey.800',
                        }}
                        data-d={getKey(rs, '17c860f209d14c88a0033029')}
                      >
                        {'chevron_left'}
                      </Icon>
                    </Box>
                  </Grid>
                  <Grid
                    key='grid-7'
                    variants={b.getVariants(undefined)}
                    display={'grid'}
                    sx={{
                      ml: {
                      xs: 0,
                      md: -4,
                    },
                      mr: {
                      xs: 0,
                      md: -4,
                    },
                    }}
                    item={true}
                    container={true}
                    data-d={getKey(rs, '17c8607e0df14c88a0033001')}
                  >
                    <Grid
                      key='providerScroll'
                      variants={b.getVariants(undefined)}
                      container={true}
                      sx={{
                        display: 'grid',
                        'grid-gap': '20px',
                        'overflow-x': 'scroll',
                        'scroll-snap-type': 'x proximity',
                        'grid-auto-flow': 'column',
                        'grid-auto-columns': undefined,
                        p: {
                        xs: '10px 15px 20px 15px',
                        md: '10px 0px 20px 40px',
                      },
                        '::-webkit-scrollbar': {
                        display: 'none',
                      },
                        '-ms-overflow-style': 'none',
                        'scroll-behavior': 'smooth',
                        'grid-auto-rows': 'auto',
                      }}
                      ref={b.tryCatch(() => (b.propertyBind(providerScrollHookArgs, ['0'])))}
                      data-d={getKey(rs, '17c8162212414c88a00330fd')}
                    >
                      <CardProviderHomepage
                        key='card-provider-homepage-1'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c8677035014c88a0033320')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-12'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c86776c8714c88a003332b')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-11'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c86775c8c14c88a003332a')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-10'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c867755ad14c88a0033329')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-9'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c8677546c14c88a0033328')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-8'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c867752a414c88a0033327')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-7'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c8677515414c88a0033326')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-6'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c8677502714c88a0033325')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-5'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c86774ee414c88a0033324')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-4'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c86774d8414c88a0033323')}
                      />
                      <CardProviderHomepage
                        key='card-provider-homepage-3'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c86774be514c88a0033322')}
                      />
                      <CardHomepageEndCard
                        key='card-provider-homepage-end-card-1'
                        variants={b.getVariants(undefined)}
                        data-d={getKey(rs, '17c8fc76e0314c88a0033029')}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    key='grid-41'
                    variants={b.getVariants(undefined)}
                    sx={{
                      width: '36px',
                      display: {
                      xs: 'none',
                      md: 'flex',
                    },
                    }}
                    item={true}
                    container={true}
                    data-d={getKey(rs, '17ca45175df14c88a0033099')}
                  >
                    <Box
                      key='box-10'
                      variants={b.getVariants(undefined)}
                      sx={{
                        width: 100,
                        backgroundColor: 'rgba(224, 224, 224, 0.7)',
                        borderRadius: 1,
                        display: {
                        xs: 'none',
                        md: 'flex',
                      },
                        alignItems: 'center',
                        justifyContent: 'center',
                        'z-index': '100',
                        mb: '5px',
                      }}
                      onClick={b.tryCatch(() => (() => b.propertyBind(providerScrollHookArgs, ['0','current']).scrollLeft += 325))}
                      data-d={getKey(rs, '17c861f407d14c88a003309f')}
                    >
                      <Icon
                        key='icon-6'
                        variants={b.getVariants(undefined)}
                        sx={{
                          color: 'grey.800',
                        }}
                        fontSize={''}
                        data-d={getKey(rs, '17c861f407d14c88a00330a0')}
                      >
                        {'chevron_right'}
                      </Icon>
                    </Box>
                  </Grid>
                </Grid>
              ];
            
              return typeof renderFn === 'function' ? renderFn(...providerScrollHookArgs) : renderFn;
            })(rs, variables)}
          </Hook>
        </Grid>
      </Grid>
    ]);
  };
  ;
