from rest_framework import generics, permissions
from api.models import Project
from api.serializers.project_serializer import ProjectSerializer
from rest_framework.response import Response
from rest_framework import status
from api.permissions.project_permissions import IsProjectOwner

class ProjectListCreateView(generics.ListCreateAPIView):
 
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
       
        serializer.save(owner=self.request.user)

class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
   
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsProjectOwner]

    def retrieve(self, request, *args, **kwargs):
      
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        
        instance = self.get_object()

        if instance.owner != request.user:
            return Response({'detail': 'No Permission Access'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
      
        instance = self.get_object()

        if instance.owner != request.user:
            return Response({'detail': 'No Permission Access'}, status=status.HTTP_403_FORBIDDEN)

        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
    