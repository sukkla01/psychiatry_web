import * as React from 'react';
import { ConfigConsumerProps } from '../config-provider';
export interface RateProps {
    prefixCls?: string;
    count?: number;
    value?: number;
    defaultValue?: number;
    allowHalf?: boolean;
    allowClear?: boolean;
    disabled?: boolean;
    tooltips?: Array<string>;
    onChange?: (value: number) => void;
    onHoverChange?: (value: number) => void;
    character?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
interface RateNodeProps {
    index: number;
}
export default class Rate extends React.Component<RateProps, any> {
    static defaultProps: {
        character: JSX.Element;
    };
    private rcRate;
    saveRate: (node: any) => void;
    characterRender: (node: React.ReactNode, { index }: RateNodeProps) => {} | null | undefined;
    focus(): void;
    blur(): void;
    renderRate: ({ getPrefixCls, direction }: ConfigConsumerProps) => JSX.Element;
    render(): JSX.Element;
}
export {};
