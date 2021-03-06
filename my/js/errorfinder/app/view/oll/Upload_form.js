Ext.define('my.js.errorfinder.app.view.oll.Upload_form', {
	extend : 'Ext.panel.Panel',
	
	xtype: 'upload-form',
            
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    defaults : {
        bodyPadding : 5,
        anchor: '100%',
        labelWidth: 120,
    },

    items :[{
        xtype: 'filefield',
        name: 'file',
        bind :{
            fieldLabel: '{fieldLabel}',
        },
        emptyText: 'Browse ...',
        buttonText :'...',
        flex: 9,
        allowBlank: false,
        enableKeyEvents: true,
        allowBlank: false,
        cls : 'form-control',
        
    },{
        xtype : 'button',
        text : 'UPLOAD',
        name : 'btn-upload',
        flex: 1,
        formBind: true,
        cls : 'form-control',
        margin : '0 0 0 3',
        listeners : {
            click : 'onUpload'
        }
    }]
});