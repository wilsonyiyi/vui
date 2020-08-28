import * as React from 'react';
import SvgIcon, { ISvgIconProps } from './util';

export default function Search(props: ISvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M192 448c0-141.152 114.848-256 256-256s256 114.848 256 256-114.848 256-256 256-256-114.848-256-256z m710.624 409.376l-206.88-206.88A318.784 318.784 0 0 0 768 448c0-176.736-143.264-320-320-320S128 271.264 128 448s143.264 320 320 320a318.784 318.784 0 0 0 202.496-72.256l206.88 206.88 45.248-45.248z"></path>
    </SvgIcon>
  );
}
