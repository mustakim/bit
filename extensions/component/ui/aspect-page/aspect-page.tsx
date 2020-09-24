import { AspectBox } from '@teambit/staged-components.aspect-box';
import React from 'react';
import { H1 } from '@teambit/documenter.ui.heading';
import { Separator } from '@teambit/documenter.ui.separator';
import styles from './aspect-page.module.scss';

const exampleJson = {
  $schema: '',
  'teambit.bit/workspace': {
    name: 'bit',
    icon: 'https://static.bit.dev/bit-logo.svg',
    defaultScope: 'teambit3.bit',
    defaultDirectory: 'components',
    // "vendorDirectory": "vendor",
  },
  'teambit.bit/dependency-resolver': {
    packageManager: 'teambit.bit/pnpm',
    strictPeerDependencies: true,
    extraArgs: [],
    policy: {
      dependencies: {
        '@apollo/react-common': '^3.1.4',
        '@apollo/react-hooks': '^3.1.5',
        '@graphql-modules/core': '^0.7.17',
        '@jest/test-result': '26.3.0',
        '@pmmmwh/react-refresh-webpack-plugin': '^0.3.2',
        '@pnpm/client': '2.0.4',
        '@pnpm/config': '11.3.0',
        '@pnpm/default-reporter': '7.9.1',
        '@pnpm/default-resolver': '11.0.3',
        '@pnpm/error': '1.3.1',
        '@pnpm/fetch': '2.1.5',
        '@pnpm/fetching-types': '1.0.0',
        '@pnpm/git-resolver': '4.1.4',
        '@pnpm/local-resolver': '5.0.14',
        '@pnpm/logger': '3.2.2',
        '@pnpm/npm-resolver': '10.0.2',
        '@pnpm/package-store': '10.1.0',
        '@pnpm/pick-registry-for-package': '1.0.3',
        '@pnpm/resolver-base': '7.0.3',
        '@pnpm/store-connection-manager': '0.3.35',
        '@pnpm/tarball-fetcher': '8.2.2',
        '@pnpm/tarball-resolver': '4.0.3',
        '@stencil/core': '^1.15.0',
        '@stencil/webpack': '0.0.6',
        '@svgr/webpack': '^5.4.0',
        '@teambit/any-fs': '0.0.5',
        '@teambit/base-ui.constants.storage': '^0.2.10',
        '@teambit/base-ui.css-components.roundness': '^0.2.10',
        '@teambit/base-ui.elements.separator': '^0.2.10',
        '@teambit/base-ui.input.error': '^0.2.10',
        '@teambit/base-ui.layout.breakpoints': '^0.2.10',
        '@teambit/base-ui.layout.grid-component': '^0.2.10',
        '@teambit/base-ui.layout.page-frame': '^0.2.10',
        '@teambit/base-ui.surfaces.card': '^0.2.10',
        '@teambit/base-ui.surfaces.split-pane.hover-splitter': '^0.2.10',
        '@teambit/base-ui.surfaces.split-pane.split-pane': '^0.2.10',
        '@teambit/base-ui.text.muted-text': '^0.2.10',
        '@teambit/base-ui.text.paragraph': '^0.2.10',
        '@teambit/base-ui.text.themed-text': '^0.2.10',
        '@teambit/base-ui.theme.color-palette': '^0.1.5',
        '@teambit/base-ui.theme.colors': '^0.2.10',
        '@teambit/base-ui.theme.dark-theme': '^0.0.3',
        '@teambit/base-ui.theme.sizes': '^0.2.10',
        '@teambit/base-ui.theme.theme-provider': '^0.2.10',
        '@teambit/base-ui.utils.sub-paths': '^0.2.10',
        '@teambit/base-ui.utils.time-ago': '^0.2.10',
        '@teambit/capsule': '0.0.12',
        '@teambit/documenter.code.react-playground': '0.0.8',
        '@teambit/documenter.theme.theme-context': '^0.0.5',
        '@teambit/documenter.types.docs-file': '0.0.7',
        '@teambit/documenter.ui.consumable-link': '^0.0.5',
        '@teambit/documenter.ui.heading': '^0.0.5',
        '@teambit/documenter.ui.label-list': '^0.0.5',
        '@teambit/documenter.ui.linked-heading': '^0.0.6',
        '@teambit/documenter.ui.property-table': '^0.0.7',
        '@teambit/documenter.ui.section': '^0.0.5',
        '@teambit/documenter.ui.separator': '^0.0.5',
        '@teambit/documenter.ui.sub-title': '^0.0.5',
        '@teambit/evangelist.elements.button': '^0.0.3',
        '@teambit/evangelist.elements.heading': '^0.0.3',
        '@teambit/evangelist.elements.icon': '^0.0.3',
        '@teambit/evangelist.elements.image': '^0.0.3',
        '@teambit/evangelist.elements.x-button': '0.0.2',
        '@teambit/evangelist.input.input': '^0.0.3',
        '@teambit/evangelist.surfaces.dropdown': '0.0.3',
        '@teambit/evangelist.surfaces.tooltip': '0.0.3',
        '@teambit/evangelist.theme.icon-font': '^0.0.2',
        '@teambit/explorer.ui.component-card': '^0.0.2',
        '@teambit/explorer.ui.component-grid': '^0.0.2',
        '@teambit/harmony': '0.2.6',
        '@testing-library/jest-dom': '^5.9.0',
        '@testing-library/react': '11.0.4',
        'ansi-to-html': '^0.6.14',
        'apollo-boost': '^0.4.9',
        'apollo-cache-inmemory': '^1.6.6',
        'apollo-client': '^2.6.10',
        'apollo-link': '^1.2.14',
        'apollo-link-error': '^1.1.13',
        'apollo-link-http': '^1.5.17',
        'apollo-link-ws': '^1.0.20',
        'apollo-utilities': '^1.3.4',
        'aws-sdk': '2.756.0',
        'babel-jest': '^26.0.1',
        'babel-plugin-named-asset-import': '^0.3.6',
        'babel-polyfill': '^6.26.0',
        'babel-preset-jest': '^26.3.0',
        'body-parser': '1.19.0',
        cacache: '^15.0.5',
        camelcase: '^6.0.0',
        'case-sensitive-paths-webpack-plugin': '^2.3.0',
        classnames: '^2.2.6',
        cleargraph: '^5.4.0',
        'copy-to-clipboard': '^3.3.1',
        'core-js': '^3.6.5',
        cors: '^2.8.5',
        'cross-spawn': '^7.0.3',
        didyoumean: '^1.2.1',
        'eslint-import-resolver-node': '0.3.4',
        express: '^4.17.1',
        'express-graphql': '^0.9.0',
        'express-history-api-fallback': '^2.2.1',
        'file-loader': '^6.0.0',
        filenamify: '^4.1.0',
        'fuse.js': '^6.4.1',
        'get-port': '^5.1.1',
        globby: '11.0.1',
        graphql: '^15.1.0',
        'graphql-request': '3.0.0',
        'graphql-subscriptions': '^1.1.0',
        'graphql-tag': '^2.10.3',
        history: '4.10.1',
        'html-webpack-plugin': '^4.3.0',
        'http-proxy': '^1.18.1',
        jest: '^26.0.1',
        'jest-message-util': '26.3.0',
        'join-path': '^1.1.1',
        'json-formatter-js': '2.3.4',
        'jsx-to-string': '1.4.0',
        'lodash.head': '^4.0.1',
        'memoize-one': '5.1.1',
        mime: '^2.4.6',
        'mini-css-extract-plugin': '^0.9.0',
        mousetrap: '^1.6.5',
        'node-fetch': '2.6.0',
        'optimize-css-assets-webpack-plugin': '^5.0.3',
        'parallel-webpack': '^2.6.0',
        'parse-package-name': '0.1.0',
        postcss: '7.0.32',
        'postcss-flexbugs-fixes': '^4.2.1',
        'postcss-loader': '^3.0.0',
        'postcss-normalize': '^9.0.0',
        'postcss-preset-env': '^6.7.0',
        'postcss-safe-parser': '^4.0.2',
        'pretty-time': '^1.1.0',
        'prism-react-renderer': '^1.1.1',
        'proper-lockfile': '^4.1.1',
        react: '^16.13.1',
        'react-dev-utils': '^10.2.1',
        'react-dom': '^16.13.1',
        'react-error-overlay': '^6.0.7',
        'react-hot-loader': '^4.12.21',
        'react-live': '^2.2.2',
        'react-router-dom': '^5.2.0',
        'react-tabs': '^3.1.1',
        'react-test-renderer': '^16.13.1',
        'react-tooltip': '^4.2.8',
        'react-transition-group': '^4.4.1',
        'reset-css': '^5.0.1',
        'resolve-url-loader': '^3.1.1',
        rxjs: '^6.5.4',
        semver: '7.3.2',
        'semver-intersect': '^1.4.0',
        'socket.io': '^2.3.0',
        'socket.io-client': '^2.3.0',
        'string-to-color': '^2.1.3',
        'strip-ansi': '6.0.0',
        'subscriptions-transport-ws': '^0.9.16',
        supi: '0.42.0',
        'terser-webpack-plugin': '^4.1.0',
        'url-loader': '^4.1.0',
        webpack: '4.42.0',
        'webpack-dev-middleware': '^3.7.2',
        'webpack-dev-server': '^3.11.0',
        'webpack-hot-middleware': '^2.25.0',
        'webpack-manifest-plugin': '^2.2.0',
        'webpack-merge': '^4.2.2',
        'workbox-webpack-plugin': '^5.1.3',
      },
      devDependencies: {
        '@types/mocha': '-',
        '@types/cacache': '^12.0.1',
        '@types/classnames': '^2.2.10',
        '@types/cors': '^2.8.6',
        '@types/cross-spawn': '^6.0.2',
        '@types/didyoumean': '^1.2.0',
        '@types/puppeteer': '^3.0.1',
        '@types/react': '16.9.43',
        '@types/react-router-dom': '^5.1.5',
        '@types/react-tabs': '^2.3.2',
        '@types/react-transition-group': '^4.4.0',
        '@types/socket.io-client': '^1.4.33',
        '@types/webpack': '^4.41.13',
        '@types/webpack-dev-server': '^3.10.1',
        '@types/history': '^4.7.6',
        '@types/proper-lockfile': '^4.1.1',
        '@types/lodash.head': '^4.0.6',
        '@types/webpack-merge': '^4.1.5',
        '@types/mousetrap': '^1.6.3',
      },
      peerDependencies: {
        react: '^16.13.1',
        browserslist: '^4',
        mz: '^2.7.0',
        'bit-bin': '14.8.9-dev.23',
        graphql: '^14.3.1',
        'react-dom': '^16.13.1',
        '@babel/runtime': '^7.11.2',
      },
    },
  },
  'teambit.bit/variants': {
    '*': {
      'teambit.bit/pkg': {
        packageManagerPublishArgs: ['--access public'],
        packageJson: {
          name: '@teambit/{name}',
          private: false,
        },
      },
      'teambit.bit/dependency-resolver': {
        policy: {
          dependencies: {
            'bit-bin': '-',
          },
          devDependencies: {
            '@types/mocha': '^5.2.7',
            // why this is needed? try to automate this
            '@types/node': '^12.12.27',
            'bit-bin': '-',
          },
          peerDependencies: {
            react: '^16.13.1',
            'bit-bin': '14.8.9-dev.23',
            'react-dom': '^16.13.1',
            graphql: '^14.3.1',
          },
        },
      },
    },
    components: {
      'teambit.bit/react': {},
    },
    extensions: {
      'teambit.bit/aspect': {},
    },
    toolbox: {
      // "teambit.bit/react": {}
    },
    'extensions/bit': {
      'teambit.bit/pkg': {
        packageJson: {
          packageManagerPublishArgs: ['--access public'],
          name: '@teambit/{name}',
          private: false,
          // Change back to "bin": "bin/bit" once released to prod
          bin: {
            bbit: 'bin/bit',
          },
        },
      },
      'teambit.bit/dependency-resolver': {
        policy: {
          dependencies: {
            'bit-bin': '14.8.9-dev.23',
            react: '^16.13.1',
            'react-dom': '^16.13.1',
            graphql: '^14.3.1',
            browserslist: '^4',
            'reflect-metadata': '^0.1.13',
            mz: '^2.7.0',
          },
          devDependencies: {
            '@types/react': '^16.9.43',
            '@types/mocha': '^5.2.7',
            // why this is needed? try to automate this
            '@types/node': '^12.12.27',
          },
          peerDependencies: {
            'bit-bin': '-',
            browserslist: '-',
            graphql: '-',
            react: '-',
          },
        },
      },
    },
  },
};

export function AspectPage() {
  return (
    <div className={styles.aspectPage}>
      <div>
        <H1 className={styles.title}>Aspects</H1>
        <Separator className={styles.separator} />
        <AspectBox
          className={styles.aspectBox}
          name="@teambit.bit/dependency-resolver"
          icon="https://static.bit.dev/bit-logo.svg"
          config={exampleJson}
          data={exampleJson}
        />
        <AspectBox
          className={styles.aspectBox}
          name="@teambit.bit/dependency-resolver"
          icon="https://static.bit.dev/bit-logo.svg"
          config={exampleJson}
          data={exampleJson}
        />
      </div>
    </div>
  );
}
