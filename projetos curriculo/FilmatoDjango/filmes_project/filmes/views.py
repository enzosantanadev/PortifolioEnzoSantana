from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Movie
from .forms import MovieForm

# Criar um novo filme
def add_movie(request):
    if request.method == 'POST':
        form = MovieForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Filme adicionado com sucesso!")
            return redirect('movie_list')
        else:
            messages.error(request, "Erro ao adicionar o filme. Verifique os dados.")
    else:
        form = MovieForm()
    return render(request, 'filmes/add_movie.html', {'form': form})

# Ler todos os filmes
def movie_list(request):
    movies = Movie.objects.all()
    return render(request, 'filmes/movie_list.html', {'movies': movies})

# Atualizar um filme existente
def edit_movie(request, pk):
    movie = get_object_or_404(Movie, pk=pk)
    if request.method == 'POST':
        form = MovieForm(request.POST, instance=movie)
        if form.is_valid():
            form.save()
            messages.success(request, "Filme atualizado com sucesso!")
            return redirect('movie_list')
        else:
            messages.error(request, "Erro ao atualizar o filme. Verifique os dados.")
    else:
        form = MovieForm(instance=movie)
    return render(request, 'filmes/edit_movie.html', {'form': form})

# Deletar um filme
def delete_movie(request, pk):
    movie = get_object_or_404(Movie, pk=pk)
    if request.method == 'POST':
        movie.delete()
        messages.success(request, "Filme deletado com sucesso!")
        return redirect('movie_list')
    return render(request, 'filmes/delete_movie.html', {'movie': movie})

# Detalhes de um filme
def movie_detail(request, pk):
    movie = get_object_or_404(Movie, pk=pk)
    return render(request, 'filmes/movie_detail.html', {'movie': movie})
