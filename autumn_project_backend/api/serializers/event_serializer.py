from rest_framework import serializers
from api.models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['event', 'event_title', 'event_category_id', 'visible_to_group_id', 'event_description', 'registration_deadline', 'additional_details_link']
        
