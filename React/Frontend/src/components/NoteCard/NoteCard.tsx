import { Box, Button, Card, CardContent, Grid, TextField } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInjection } from '../../ioc/ioc.react';
import ownTypes from '../../ioc/ownTypes';
import Note from '../../models/Note';
import { NoteStore } from '../../stores/components';

interface Props {
    note: Note;
}

const NoteCard = observer((props: Props) => {
    const store = useInjection<NoteStore>(ownTypes.noteStore);
    const { t } = useTranslation(['note']);

    useEffect(() => {
        const setNote = async () => {
            await store.init(props.note);
        }
        setNote();
    }, [props, store]);

    return (
        <Card
        onClick={() => console.log(props.note.id)}
        className='note-card'
        sx={{height: 300}}
        key={props.note.id}
        >
            <CardContent>
                <Box className='note-box' paddingBottom={1}>
                    <TextField
                    className='note-title'
                    variant='filled'
                    fullWidth
                    disabled={store.disabled}
                    size='medium'
                    value={props.note.title}
                    onChange={(e) => store.changeTitle(e.target.value)}/>
                    <TextField
                    className='note-text'
                    multiline
                    variant='filled'
                    rows={6}
                    fullWidth
                    disabled={store.disabled}
                    value={props.note.text}
                    onChange={(e) => store.chagneText(e.target.value)}/>
                </Box>
                <Grid container>
                    <Grid item lg={5} md={5} xs={5}>
                        <Button
                        className='edit-or-save-note-button'
                        fullWidth
                        onClick={store.changeDisabled}
                        variant='contained'>
                            {store.disabled ? t('edit') : t('save')}
                        </Button>
                    </Grid>
                    <Grid item lg={2} md={2} xs={2}/>
                    <Grid item lg={5} md={5} xs={5}>
                        <Button
                        className='delete-note-button'
                        fullWidth
                        onClick={() => store.delete(props.note.id)}
                        variant='contained'>
                            {t('delete')}
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
})

export default NoteCard;