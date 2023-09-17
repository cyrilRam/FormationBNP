from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import EleveSerializer
from .models import Eleve


class EleveView(generics.ListAPIView):
    queryset = Eleve.objects.all()
    serializer_class = EleveSerializer


class EleveCreateView(generics.CreateAPIView):
    queryset = Eleve.objects.all()
    serializer_class = EleveSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response({"message": "Élève créé avec succès"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
