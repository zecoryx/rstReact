/**
 * TANSTACK QUERY (REACT QUERY) GUIDE:
 * 
 * React Query - serverdan ma'lumot olish, keshni boshqarish va 
 * avtomatik yangilash (refetching) uchun ishlatiladi.
 * 
 * O'rnatish: npm install @tanstack/react-query
 */

/*
// 1. QUERY CLIENT SOZLASH (main.jsx)
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

// App-ni Provider bilan o'rash:
// <QueryClientProvider client={queryClient}> <App /> </QueryClientProvider>


// 2. MA'LUMOT OLISH (src/data-fetching/PostsList.jsx)
import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';

function PostsList() {
  // 'posts' - bu kesh kaliti. Agar boshqa joyda ham 'posts' chaqirilsa, 
  // React Query ma'lumotni keshdan oladi (ikkinchi marta so'rov yubormaydi).
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: postService.getAll
  });

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xato yuz berdi: {error.message}</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
*/

console.log("React Query qo'llanmasi: Fayl ichidagi kommentlarni o'qing.");
