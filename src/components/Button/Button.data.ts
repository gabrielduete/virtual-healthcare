const STYLES = {
  filled: 'filled',
  outlined: 'outlined',
}

export const conditionsStyle = (style: string) => {
  return {
    isFilled: style === STYLES.filled,
    isOutlined: style === STYLES.outlined,
  }
}
