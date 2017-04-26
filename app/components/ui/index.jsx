import classnames from 'classnames';
export function dropDownClassName(expanded) {
    const css = {};
    css['btn-group'] = true;
    css['open'] = expanded;
    return classnames(css);
}
