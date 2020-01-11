<template lang="pug">
.container
	section.post(v-for='page in $pagination.pages' v-if='page.path !== "/"')
		.date {{ formatDate(page.frontmatter.date) }}
		Content(:page-key='page.key')

	nav.pagination
		router-link.pagination-previous(v-if='$pagination.hasPrev' :to='$pagination.prevLink') Nyere innlegg
		router-link.pagination-next(v-if='$pagination.hasNext' :to='$pagination.nextLink') Eldre innlegg
</template>

<script>
export default {
	methods: {
		formatDate(date) {
			return new Date(date).toLocaleDateString('nb-NO');
		},
	},
};
</script>
