<script>
  import { onMount } from 'svelte';
  import { format } from 'date-fns';
  import { ja } from 'date-fns/locale';
  
  export let post = {};
  export let index = 0;
  
  let formattedDate = '';
  
  onMount(() => {
    formattedDate = format(new Date(post.data.date), 'yyyy年MM月dd日', { locale: ja });
  });
</script>

<a href={`/posts/${post.slug}`} class="post-card" style="animation-delay: {index * 0.1}s">
  <article>
    <h2>{post.data.title}</h2>
    <div class="post-meta">
      <time datetime={post.data.date}>{formattedDate}</time>
      {#if post.data.tags && post.data.tags.length > 0}
        <div class="post-tags">
          {#each post.data.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
    {#if post.data.description}
      <p class="description">{post.data.description}</p>
    {/if}
  </article>
</a>

<style>
  .post-card {
    display: block;
    padding: 1.5rem;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    color: inherit;
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
  }
  
  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-top: 0;
    color: var(--color-primary);
    font-size: 1.5rem;
  }
  
  .post-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.9rem;
    color: #666;
    margin: 0.5rem 0 1rem;
  }
  
  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tag {
    background-color: #f0f0f0;
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    font-size: 0.8rem;
  }
  
  .description {
    margin: 0;
    color: #444;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style> 