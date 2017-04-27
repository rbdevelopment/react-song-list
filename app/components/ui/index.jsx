import classnames from 'classnames';
export function dropDownClassName(expanded) {
    const css = {};
    css['btn-group'] = true;
    css['open'] = expanded;
    return classnames(css);
}
export function panelClassName(expanded) {
    const css = {};
    css['popup'] = true;
    css['panel'] = true;
    css['hide'] = !expanded;
    return classnames(css);
}
