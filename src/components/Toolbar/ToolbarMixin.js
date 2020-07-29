import { mapActions, mapState } from 'vuex'
import { handleClick } from '@/services/toolbar'

export default {
  computed: {
    alignCenterActive () {
      return this.activeActions.includes('ALIGN_CENTER')
    },
    alignRightActive () {
      return this.activeActions.includes('ALIGN_RIGHT')
    },
    alignLeftActive () {
      return this.activeActions.includes('ALIGN_LEFT')
    },
    alignJustifyActive () {
      return this.activeActions.includes('ALIGN_JUSTIFY')
    },
    ...mapState({
      activeActions: state => state.toolbar.activeActions
    })
  },
  methods: {
    handleClick,
    ...mapActions(['setActiveActions'])
  }
}