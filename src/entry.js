import './styles/global.scss';

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./components/', true, /\.js$/));
requireAll(require.context('./pages/', true, /\.js$/));
