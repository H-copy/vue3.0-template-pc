const TYPES = {
  feat: {
    description: '新功能',
  },
  fix: {
    description: 'bug修复',
  },
  perf: {
    description: '性能提升',
  },
  refactor: {
    description: '功能重构',
  },
  revert: {
    description: '回归',
  },
  style: {
    description: '样式修改',
  },
  test: {
    description: '测试新增/更新',
  },
  chore: {
    description: '其他',
  },
  docs: {
    description: '文档',
  },
  ci: {
    description: '持续集成/CI|CD',
  },
  build: {
    description: '构建工具',
  }
}

const LEVEL = {
  never: 0,
  warning: 1,
  error: 2
}

// 类型
const types = {
  // 不能为空
  'type-empty': [LEVEL.error, 'never', '.'],
  // 全小写
  'type-case': [LEVEL.error, 'always', 'lower-case'],
  // 可选类型
  'type-enum': [LEVEL.error, 'always', Object.keys(TYPES)],
  // 结束分割符
  'trailer-exists': [LEVEL.error, 'always', 'Signed-off-by:'],
}

// 标题
const header = {
  // 长度不超过100字符
  'header-max-length': [LEVEL.error, 'always', 100],
}

// 概要
const subject = {
  'subject-empty': [LEVEL.error, 'never'],
  'subject-full-stop': [LEVEL.error, 'never', '.'],
}

// 内容
const body = {}

// 注脚
const footer = {
  'footer-leading-blank': [LEVEL.warning, 'always'],
  'footer-max-line-length': [LEVEL.warning, 'always', 100],
}

// 影响范围
const scope = {}


module.exports = {
  rules: {
    ...types,
    ...header,
    ...body,
    ...footer,
    ...subject,
    ...scope
  },
  prompt: {
    setting: {
      enableMultipleScopes: true
    },
    messages: {},
    questions: {
      type:  {
        description: '提交类型(必填)',
        enum: TYPES,
      },
      subject: {
        description: '概要(必填)'
      },
      scope: {
        description: '影响文件/功能/范围'
      },
      body: {
        description: '详细内容'
      },
    }
  }
}
