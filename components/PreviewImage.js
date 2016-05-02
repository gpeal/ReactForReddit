import React, {
    Component,
    Image,
    StyleSheet
} from 'react-native';

export default class PreviewImage extends Component {
    render() {
        const preview = this.props.preview;
        return preview === undefined || preview.images === undefined || preview.images.length == 0 ?
            null :
            (
                <Image
                    source={{uri: preview.images[0].source.url}}
                    style={styles.thumbnail}/>
            );
    }
}

const styles = StyleSheet.create({
    thumbnail: {
        width: 53,
        height: 81
    }
});
