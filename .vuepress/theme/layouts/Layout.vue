<template lang="pug">
.container
	PostList(v-if='$pagination')
	Post(v-else)
</template>

<script>
import PostList from './PostList';
export default {
	components: {
		PostList,
	},
};
</script>
