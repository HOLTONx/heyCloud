import { LightningElement } from 'lwc';
import EVENT_OBJECT from '@salesforce/schema/Event__c';
import PARTICIPANT_OBJECT from '@salesforce/schema/Event_participant__c';
import EVENT_NAME from '@salesforce/schema/Event__c.Name';
import EVENT_DATE from '@salesforce/schema/Event__c.Date__c';
import EVENT_ADDRESS from '@salesforce/schema/Event__c.Address__c';
import EVENT_DESCRIPTION from '@salesforce/schema/Event__c.Description__c';
import FIRSTNAME from '@salesforce/schema/Event_participant__c.First_Name__c';
import LASTNAME from '@salesforce/schema/Event_participant__c.Last_Name__c';
import DATEBIRTH from '@salesforce/schema/Event_participant__c.Date_Of_Birth__c';
import EMAIL from '@salesforce/schema/Event_participant__c.Email__c';


export default class HeyCloudForm extends LightningElement {
    eventObject = EVENT_OBJECT;
    participantObject = PARTICIPANT_OBJECT;
    eventFields = [EVENT_NAME, EVENT_DATE, EVENT_ADDRESS, EVENT_DESCRIPTION];
    participantFields = [FIRSTNAME, LASTNAME, DATEBIRTH, EMAIL];

    handleSubmit(event){
        event.preventDefault();
    }
}