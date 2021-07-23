<div class="breakpoint">screen</div>

<style lang="scss">
	.breakpoint {
		position: fixed;
		bottom: 0;
		padding: 0.5rem;
		opacity: 0.4;
		&::before {
			content: 'default ';
			@screen sm {
				content: 'sm ';
			}
			@screen md {
				content: 'md ';
			}
			@screen lg {
				content: 'lg ';
			}
			@screen xl {
				content: 'xl ';
			}
			@screen 2xl {
				content: '2xl ';
			}
		}
	}
</style>
