/* THIS FILE WAS AUTOGENERATED BY CLUTCH. DO NOT EDIT. */
import React from 'react';
import * as b from '@clutch-creator/bridge';
import HelmetMeta from '@clutch-marketplace/helmet/dist/cjs/components/HelmetMeta';
import HelmetLink from '@clutch-marketplace/helmet/dist/cjs/components/HelmetLink';
import AppBar from '../App Bar';
import Box from '../Box';
import Toolbar from '../Toolbar';
import Typography from '../Typography';
import Text from '@clutch-marketplace/web-elements/dist/cjs/components/Text';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import IconButton from '../IconButton';
import Icon from '../Icon';
import MobileMenu from '../MobileMenu';
import LoggedOutMasthead from '../Logged Out Masthead';
import Grid from '../Grid';
import State from '@clutch-marketplace/logic/dist/cjs/components/State';
import Element from '@clutch-marketplace/element/dist/cjs/components/Element';
import ButtonfilterhomepageBaseEndIcon from './logic/button-filter-homepage/base-endicon.js';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import FormControl from '../Form Control';
import OutlinedInput from '../OutlinedInput';
import Outlinedinput1BaseEndAdornment from './logic/outlined-input-1/base-endadornment.js';
import HomepageProvidersScroll from '../Homepage Providers Scroll';
import HomepageCoursesScroll from '../Homepage Courses Scroll';
import HomepageMediaScroll from '../Homepage Media Scroll';
import HomepageEventsScroll from '../Homepage Events Scroll';

export default (props) => {
    const [report, getKey] = b.useReport(props);
    const { variants } = props;
    const variables = {};
  
    const rs = report(null, '17c3e4593bd14c88a003300e', 'COMPOSITION', props, variables);
  
    return ([
      <HelmetMeta
        key='meta-viewport-2'
        variants={b.getVariants(undefined)}
        content={'initial-scale=1, width=device-width'}
        name={'viewport'}
        data-d={getKey(rs, '17c3e4673e614c88a0033012')}
      />,
      <HelmetLink
        key='font-roboto'
        variants={b.getVariants(undefined)}
        rel={'stylesheet'}
        href={'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'}
        data-d={getKey(rs, '17c3e46d10614c88a0033013')}
      />,
      <HelmetLink
        key='font-icons'
        variants={b.getVariants(undefined)}
        rel={'stylesheet'}
        href={'https://fonts.googleapis.com/icon?family=Material+Icons'}
        data-d={getKey(rs, '17c51be06f814c88a0033000')}
      />,
      <AppBar
        key='app-bar-5'
        variants={b.getVariants(undefined)}
        classes={b.getUniqueClassName()}
        color={undefined}
        enableColorOnDark={undefined}
        position={'static'}
        sx={undefined}
        data-d={getKey(rs, '17c4d71b77414c88a0033018')}
      >
        <Box
          key='box-1'
          variants={b.getVariants(undefined)}
          sx={{
            flexGrow: '1',
          }}
          data-d={getKey(rs, '17c52ebe62d14c88a0033101')}
        >
          <Toolbar
            key='toolbar-1'
            variants={b.getVariants(undefined)}
            classes={b.getUniqueClassName()}
            disableGutters={undefined}
            sx={undefined}
            variant={undefined}
            data-d={getKey(rs, '17c4d72129914c88a003301a')}
          >
            <Typography
              key='typo-brand'
              variants={b.getVariants(undefined)}
              align={undefined}
              classes={b.getUniqueClassName()}
              gutterBottom={undefined}
              noWrap={true}
              paragraph={undefined}
              sx={undefined}
              variant={'h6'}
              component={'div'}
              data-d={getKey(rs, '17c51dda63714c88a0033042')}
            >
              <Text
                key='text-brand'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'Luminate'}
                tag={'span'}
                data-d={getKey(rs, '17c51fcc93d14c88a003307d')}
              />
            </Typography>
            <Box
              key='box-2'
              variants={b.getVariants(undefined)}
              sx={{
                display: {
                xs: 'none',
                md: 'flex',
              },
              }}
              data-d={getKey(rs, '17c52ee657514c88a003310f')}
            >
              <ButtonGroup
                key='button-group-1'
                variants={b.getVariants(undefined)}
                classes={b.getUniqueClassName()}
                color={undefined}
                component={undefined}
                disabled={undefined}
                disableElevation={undefined}
                disableFocusRipple={undefined}
                disableRipple={undefined}
                fullWidth={undefined}
                orientation={undefined}
                size={undefined}
                sx={{
                  'margin-left': '25px',
                }}
                variant={undefined}
                data-d={getKey(rs, '17c52b2fe4314c88a003300d')}
              >
                <Button
                  key='button-1'
                  variants={b.getVariants(undefined)}
                  classes={b.getUniqueClassName()}
                  color={'inherit'}
                  variant={'text'}
                  data-d={getKey(rs, '17c52b98ae114c88a003303b')}
                >
                  <Text
                    key='default-text-12'
                    variants={b.getVariants(undefined)}
                    className={b.getUniqueClassName()}
                    style={undefined}
                    text={'Providers'}
                    tag={'span'}
                    data-d={getKey(rs, '17c52c2e2e914c88a0033068')}
                  />
                </Button>
                <Button
                  key='button-2'
                  variants={b.getVariants(undefined)}
                  classes={b.getUniqueClassName()}
                  color={'inherit'}
                  variant={'text'}
                  data-d={getKey(rs, '17c52c4246a14c88a003306d')}
                >
                  <Text
                    key='default-text-13'
                    variants={b.getVariants(undefined)}
                    className={b.getUniqueClassName()}
                    style={undefined}
                    text={'Courses'}
                    tag={'span'}
                    data-d={getKey(rs, '17c52c4246a14c88a003306e')}
                  />
                </Button>
                <Button
                  key='button-3'
                  variants={b.getVariants(undefined)}
                  classes={b.getUniqueClassName()}
                  color={'inherit'}
                  variant={'text'}
                  data-d={getKey(rs, '17c52dfd34214c88a00330ae')}
                >
                  <Text
                    key='default-text-14'
                    variants={b.getVariants(undefined)}
                    className={b.getUniqueClassName()}
                    style={undefined}
                    text={'Media'}
                    tag={'span'}
                    data-d={getKey(rs, '17c52dfd34214c88a00330af')}
                  />
                </Button>
                <Button
                  key='button-4'
                  variants={b.getVariants(undefined)}
                  classes={b.getUniqueClassName()}
                  color={'inherit'}
                  variant={'text'}
                  data-d={getKey(rs, '17c52dfd69614c88a00330b0')}
                >
                  <Text
                    key='default-text-15'
                    variants={b.getVariants(undefined)}
                    className={b.getUniqueClassName()}
                    style={undefined}
                    text={'Resources'}
                    tag={'span'}
                    data-d={getKey(rs, '17c52dfd69614c88a00330b1')}
                  />
                </Button>
                <Button
                  key='button-5'
                  variants={b.getVariants(undefined)}
                  classes={b.getUniqueClassName()}
                  color={'inherit'}
                  variant={'text'}
                  data-d={getKey(rs, '17c52dfdae414c88a00330b2')}
                >
                  <Text
                    key='default-text-16'
                    variants={b.getVariants(undefined)}
                    className={b.getUniqueClassName()}
                    style={undefined}
                    text={'Events'}
                    tag={'span'}
                    data-d={getKey(rs, '17c52dfdae414c88a00330b3')}
                  />
                </Button>
              </ButtonGroup>
            </Box>
            <Box
              key='box-5'
              variants={b.getVariants(undefined)}
              sx={{
                flexGrow: '1',
              }}
              data-d={getKey(rs, '17c52f16a9d14c88a0033131')}
            >
              {null}
            </Box>
            <Box
              key='box-3'
              variants={b.getVariants(undefined)}
              sx={{
                display: {
                xs: 'none',
                md: 'flex',
              },
              }}
              data-d={getKey(rs, '17c52f09a3b14c88a0033124')}
            >
              <IconButton
                key='icon-button-2'
                variants={b.getVariants(undefined)}
                data-d={getKey(rs, '17c52e8893314c88a00330eb')}
              >
                <Icon
                  key='icon-menu-1'
                  variants={b.getVariants(undefined)}
                  sx={{
                    color: '#ffffff',
                  }}
                  data-d={getKey(rs, '17c52e8893314c88a00330ec')}
                >
                  {'account_circle'}
                </Icon>
              </IconButton>
              <IconButton
                key='icon-button-3'
                variants={b.getVariants(undefined)}
                data-d={getKey(rs, '17c5d73c80214c88a0033049')}
              >
                <Icon
                  key='icon-menu-4'
                  variants={b.getVariants(undefined)}
                  sx={{
                    color: '#ffffff',
                  }}
                  data-d={getKey(rs, '17c5d73c80214c88a003304a')}
                >
                  {'settings'}
                </Icon>
              </IconButton>
            </Box>
            <MobileMenu
              key='mobile-menu'
              variants={b.getVariants(undefined)}
              data-d={getKey(rs, '17c585ab0d514c88a0033011')}
            />
          </Toolbar>
        </Box>
      </AppBar>,
      <LoggedOutMasthead
        key='logged-out-masthead-1'
        variants={b.getVariants(undefined)}
        data-d={getKey(rs, '17c71bd354a14c88a003305c')}
      />,
      <Grid
        key='content-homepage-1'
        variants={b.getVariants(undefined)}
        container={true}
        direction={'column'}
        rowSpacing={2}
        sx={{
          mt: 2,
          pl: {
          xs: 2,
          sm: 5,
          md: 10,
        },
          pr: {
          xs: 2,
          sm: 5,
          md: 10,
        },
        }}
        data-d={getKey(rs, '17ca868809314c88a0033000')}
      >
        <Grid
          key='grid-homepage-filter'
          variants={b.getVariants(undefined)}
          container={true}
          sx={{
            pl: {
            xs: 2,
            sm: 5,
            lg: 10,
          },
            pr: {
            xs: 2,
            sm: 5,
            lg: 10,
          },
            pt: {
            xs: 2,
            md: 3,
          },
          }}
          alignItems={'center'}
          data-d={getKey(rs, '17c71bdd75214c88a0033069')}
        >
          <Grid
            key='grid-9'
            variants={b.getVariants(undefined)}
            sx={{
              order: {
              xs: 1,
            },
            }}
            xs={4}
            md={3}
            data-d={getKey(rs, '17c71be340c14c88a0033071')}
          >
            <State
              key='state-filter-homepage'
              variants={b.getVariants(undefined)}
              initialValue={undefined}
              data-d={getKey(rs, '17c71c3091f14c88a0033081')}
            >
              {((r, v) => (...statefilterhomepageArgs) => {
                const newVariables = {};
              
                let variables = {
                  ...v,
                  ...newVariables
                };
              
                const rs = report(r, '17c71c3091f14c88a0033081', '178bf970a34fae252001bf06', statefilterhomepageArgs, newVariables);
              
                const renderFn = [
                  <Element
                    key='div-filter-homepage'
                    variants={b.getVariants(undefined)}
                    tag={'div'}
                    data-d={getKey(rs, '17c71c3091f14c88a0033082')}
                  >
                    <Button
                      key='button-filter-homepage'
                      variants={b.getVariants(undefined)}
                      variant={'contained'}
                      onClick={b.tryCatch(() => ((event) => b.propertyBind(statefilterhomepageArgs, ['0','setState'])(event.currentTarget)))}
                      endIcon={(ButtonfilterhomepageBaseEndIcon())}
                      data-d={getKey(rs, '17c71c3e70f14c88a0033099')}
                    >
                      <Text
                        key='default-text-41'
                        variants={b.getVariants(undefined)}
                        className={b.getUniqueClassName()}
                        style={undefined}
                        text={'Filter'}
                        tag={'span'}
                        data-d={getKey(rs, '17c71c52ea414c88a00330a1')}
                      />
                    </Button>
                    <Menu
                      key='menu-filter-homepage'
                      variants={b.getVariants(undefined)}
                      open={b.tryCatch(() => (Boolean(b.propertyBind(statefilterhomepageArgs, ['0','state']))))}
                      autoFocus={undefined}
                      classes={b.getUniqueClassName()}
                      disableAutoFocusItem={undefined}
                      MenuListProps={undefined}
                      onClose={b.tryCatch(() => (() => b.propertyBind(statefilterhomepageArgs, ['0','setState'])('')))}
                      PopoverClasses={undefined}
                      transitionDuration={undefined}
                      TransitionProps={undefined}
                      variant={undefined}
                      anchorEl={b.tryCatch(() => (b.propertyBind(statefilterhomepageArgs, ['0','state'])))}
                      getContentAnchorEl={'null'}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        horizontal: 'left',
                      }}
                      data-d={getKey(rs, '17c71c3091f14c88a0033086')}
                    >
                      <MenuItem
                        key='menu-item-9'
                        variants={b.getVariants(undefined)}
                        autoFocus={undefined}
                        classes={b.getUniqueClassName()}
                        component={undefined}
                        dense={undefined}
                        disableGutters={undefined}
                        divider={undefined}
                        focusVisibleClassName={undefined}
                        sx={undefined}
                        data-d={getKey(rs, '17c71c3091f14c88a003308b')}
                      >
                        <Text
                          key='default-text-34'
                          variants={b.getVariants(undefined)}
                          className={b.getUniqueClassName()}
                          style={undefined}
                          text={'Highest Rating'}
                          tag={'span'}
                          data-d={getKey(rs, '17c71c3091f14c88a003308c')}
                        />
                      </MenuItem>
                      <MenuItem
                        key='menu-item-13'
                        variants={b.getVariants(undefined)}
                        autoFocus={undefined}
                        classes={b.getUniqueClassName()}
                        component={undefined}
                        dense={undefined}
                        disableGutters={undefined}
                        divider={undefined}
                        focusVisibleClassName={undefined}
                        sx={undefined}
                        data-d={getKey(rs, '17c71c3092014c88a0033093')}
                      >
                        <Text
                          key='default-text-38'
                          variants={b.getVariants(undefined)}
                          className={b.getUniqueClassName()}
                          style={undefined}
                          text={'Lowest Rating'}
                          tag={'span'}
                          data-d={getKey(rs, '17c71c3092014c88a0033094')}
                        />
                      </MenuItem>
                      <MenuItem
                        key='menu-item-12'
                        variants={b.getVariants(undefined)}
                        autoFocus={undefined}
                        classes={b.getUniqueClassName()}
                        component={undefined}
                        dense={undefined}
                        disableGutters={undefined}
                        divider={undefined}
                        focusVisibleClassName={undefined}
                        sx={undefined}
                        data-d={getKey(rs, '17c71c3092014c88a0033091')}
                      >
                        <Text
                          key='default-text-37'
                          variants={b.getVariants(undefined)}
                          className={b.getUniqueClassName()}
                          style={undefined}
                          text={'Most Reviews'}
                          tag={'span'}
                          data-d={getKey(rs, '17c71c3092014c88a0033092')}
                        />
                      </MenuItem>
                      <MenuItem
                        key='menu-item-11'
                        variants={b.getVariants(undefined)}
                        autoFocus={undefined}
                        classes={b.getUniqueClassName()}
                        component={undefined}
                        dense={undefined}
                        disableGutters={undefined}
                        divider={undefined}
                        focusVisibleClassName={undefined}
                        sx={undefined}
                        data-d={getKey(rs, '17c71c3092014c88a003308f')}
                      >
                        <Text
                          key='default-text-36'
                          variants={b.getVariants(undefined)}
                          className={b.getUniqueClassName()}
                          style={undefined}
                          text={'Least Reviews'}
                          tag={'span'}
                          data-d={getKey(rs, '17c71c3092014c88a0033090')}
                        />
                      </MenuItem>
                    </Menu>
                  </Element>
                ];
              
                return typeof renderFn === 'function' ? renderFn(...statefilterhomepageArgs) : renderFn;
              })(rs, variables)}
            </State>
          </Grid>
          <Grid
            key='grid-10'
            variants={b.getVariants(undefined)}
            xs={12}
            md={6}
            sx={{
              order: {
              xs: 3,
              md: '2',
            },
              mt: {
              xs: 2,
              md: '0',
            },
            }}
            wrap={'wrap'}
            container={true}
            justifyContent={'center'}
            data-d={getKey(rs, '17c71be402314c88a0033072')}
          >
            <Button
              key='button-7'
              variants={b.getVariants(undefined)}
              classes={b.getUniqueClassName()}
              color={'primary'}
              variant={'text'}
              sx={{
                textTransform: 'capitalize',
              }}
              data-d={getKey(rs, '17c76dde53b14c88a00330de')}
            >
              <Text
                key='default-text-31'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'All'}
                tag={'span'}
                data-d={getKey(rs, '17c76dde53b14c88a00330df')}
              />
            </Button>
            <Button
              key='button-8'
              variants={b.getVariants(undefined)}
              classes={b.getUniqueClassName()}
              color={'primary'}
              variant={'text'}
              sx={{
                'text-transform': 'capitalize',
              }}
              data-d={getKey(rs, '17c76dde53b14c88a00330e0')}
            >
              <Text
                key='default-text-32'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'Astrology'}
                tag={'span'}
                data-d={getKey(rs, '17c76dde53c14c88a00330e1')}
              />
            </Button>
            <Button
              key='button-9'
              variants={b.getVariants(undefined)}
              classes={b.getUniqueClassName()}
              color={'primary'}
              variant={'text'}
              sx={{
                'text-transform': 'capitalize',
              }}
              data-d={getKey(rs, '17c76dde53c14c88a00330e2')}
            >
              <Text
                key='default-text-33'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'Human Design'}
                tag={'span'}
                data-d={getKey(rs, '17c76dde53c14c88a00330e3')}
              />
            </Button>
            <Button
              key='button-10'
              variants={b.getVariants(undefined)}
              classes={b.getUniqueClassName()}
              color={'primary'}
              variant={'text'}
              sx={{
                'text-transform': 'capitalize',
              }}
              data-d={getKey(rs, '17c76dde53c14c88a00330e4')}
            >
              <Text
                key='default-text-35'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'Metaphysical'}
                tag={'span'}
                data-d={getKey(rs, '17c76dde53c14c88a00330e5')}
              />
            </Button>
            <Button
              key='button-11'
              variants={b.getVariants(undefined)}
              classes={b.getUniqueClassName()}
              color={'primary'}
              variant={'text'}
              sx={{
                'text-transform': 'capitalize',
              }}
              data-d={getKey(rs, '17c76dde53c14c88a00330e6')}
            >
              <Text
                key='default-text-39'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'Psychology'}
                tag={'span'}
                data-d={getKey(rs, '17c76dde53c14c88a00330e7')}
              />
            </Button>
            <Button
              key='button-12'
              variants={b.getVariants(undefined)}
              classes={b.getUniqueClassName()}
              color={'primary'}
              variant={'text'}
              sx={{
                'text-transform': 'capitalize',
              }}
              data-d={getKey(rs, '17c76dedadb14c88a00330ed')}
            >
              <Text
                key='default-text-40'
                variants={b.getVariants(undefined)}
                className={b.getUniqueClassName()}
                style={undefined}
                text={'Cards'}
                tag={'span'}
                data-d={getKey(rs, '17c76dedadb14c88a00330ee')}
              />
            </Button>
          </Grid>
          <Grid
            key='grid-11'
            variants={b.getVariants(undefined)}
            xs={8}
            md={3}
            justifyContents={'flex-end'}
            sx={{
              order: {
              xs: 2,
              md: 3,
            },
            }}
            data-d={getKey(rs, '17c71be553514c88a0033073')}
          >
            <Box
              key='box-8'
              variants={b.getVariants(undefined)}
              data-d={getKey(rs, '17c75f98e4a14c88a0033000')}
            >
              <Grid
                key='grid-15'
                variants={b.getVariants(undefined)}
                container={true}
                justifyContent={'flex-end'}
                data-d={getKey(rs, '17c76d24cc214c88a003309b')}
              >
                <Grid
                  key='grid-16'
                  variants={b.getVariants(undefined)}
                  item={true}
                  data-d={getKey(rs, '17c76d58dec14c88a00330ac')}
                >
                  <FormControl
                    key='form-control-1'
                    variants={b.getVariants(undefined)}
                    variant={'outlined'}
                    size={'small'}
                    color={'primary'}
                    data-d={getKey(rs, '17c76bd604f14c88a003303d')}
                  >
                    <OutlinedInput
                      key='outlined-input-1'
                      variants={b.getVariants(undefined)}
                      placeholder={'Search...'}
                      startAdornment={undefined}
                      type={'search'}
                      sx={{
                        '& MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                        backgroundColor: 'rgba(66, 165, 245, 0.05)',
                        borderColor: 'primary.main',
                      }}
                      endAdornment={(Outlinedinput1BaseEndAdornment())}
                      data-d={getKey(rs, '17c76c18ec814c88a003304d')}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <HomepageProvidersScroll
          key='homepage-providers-scroll-1'
          variants={b.getVariants(undefined)}
          data-d={getKey(rs, '17ca44b99a414c88a0033071')}
        />
        <HomepageCoursesScroll
          key='homepage-courses-scroll-1'
          variants={b.getVariants(undefined)}
          data-d={getKey(rs, '17ca5450dc814c88a003322b')}
        />
        <HomepageMediaScroll
          key='homepage-media-scroll-1'
          variants={b.getVariants(undefined)}
          data-d={getKey(rs, '17ca545122f14c88a003322c')}
        />
        <HomepageEventsScroll
          key='homepage-events-scroll-1'
          variants={b.getVariants(undefined)}
          data-d={getKey(rs, '17ca545155014c88a003322d')}
        />
      </Grid>
    ]);
  };
  ;
