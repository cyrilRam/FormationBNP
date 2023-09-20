from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import EleveSerializer
from .models import Eleve

# View qui sert a afficher les eleves


class EleveView(generics.ListAPIView):
    queryset = Eleve.objects.all()
    serializer_class = EleveSerializer

# View pour creer un eleve


class EleveCreateView(generics.CreateAPIView):
    # queryset = Eleve.objects.all()
    serializer_class = EleveSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response({"message": "Élève créé avec succès"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
