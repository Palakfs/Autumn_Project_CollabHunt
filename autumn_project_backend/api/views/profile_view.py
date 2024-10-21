from rest_framework import generics, permissions
from api.models import Profile , Joining_Request , Team
from api.serializers.profile_serializer import ProfileSerializer
from rest_framework.response import Response
from rest_framework import status
from api.permissions.profile_permissions import IsProfileOwner
from api.permissions.team_permissions import IsTeamAdmin

class JoiningRequestProfileListView(generics.ListAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated , IsTeamAdmin]  

    def get_queryset(self):
        team_id = self.kwargs['team_id']
        return Profile.objects.filter(username__in=Joining_Request.objects.filter(team_id=team_id).values('person_expertise_id__person_username'))

class TeamMemberProfileListView(generics.ListAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        team_id = self.kwargs['team_id']
        return Profile.objects.filter(username__in=Team.objects.get(id=team_id).team_member_id.all())
    
class TeamAdminProfileView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        team_id = self.kwargs['team_id']
        team = Team.objects.get(id=team_id)
        return team.team_admin_id.profile 

    
class ProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated, IsProfileOwner]

    def retrieve(self, request, *args, **kwargs):
        
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
       
        instance = self.get_object()

        if instance.user != request.user:
            return Response({'detail': 'No Permission Access'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
       
        return Response({'detail': 'Deletion not allowed.'}, status=status.HTTP_403_FORBIDDEN)
    