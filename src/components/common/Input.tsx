import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    TextInputProps,
} from "react-native";

interface InputProps extends Omit<TextInputProps, 'onBlur'> {
    placeholder: string;
    error?: string;
    nameIcon: keyof typeof Feather.glyphMap;
    className?: string;
    onBlur?: () => void;
}

const Input = ({
    placeholder,
    secureTextEntry = false,
    keyboardType = "default",
    error,
    value,
    onChangeText,
    onBlur,
    nameIcon,
    className,
    ...rest
}: InputProps) => {
    const [hidePassword, setHidePassword] = useState(secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className={`w-full ${className}`}>
            <View style={
                {
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: error ? "#EF4444" : isFocused ? "#2586D9" : "#D1D5DB",
                    borderColor: error ? "#EF4444" : isFocused ? "#2586D9" : "#D1D5DB",
                }

            }>
                <Feather
                    name={nameIcon}
                    size={20}
                    color={error ? "#EF4444" : isFocused ? "#2586D9" : "#6B7280"}
                    style={{ marginRight: 12 }}
                />

                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={hidePassword}
                    keyboardType={keyboardType}
                    style={{
                        flex: 1,
                        color: "#374151",
                        fontSize: 16,
                        fontWeight: "500",
                        borderWidth: 1,
                        borderColor: "transparent",
                        borderRadius: 8,
                        paddingLeft: 12,
                        paddingVertical: 10,
                    }}
                    value={value}
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                        onBlur?.();
                    }}
                    accessibilityLabel={placeholder}
                    {...rest}
                />
            </View>

            {error && (
                <Text style={{ color: "#EF4444", marginTop: 4, fontSize: 12 }}>
                    {error}
                </Text>
            )}

            {secureTextEntry && (
                <TouchableOpacity
                    onPress={() => setHidePassword(!hidePassword)}
                    style={{ position: "absolute", right: 12, top: 14 }}
                >
                    <Feather
                        name={hidePassword ? "eye-off" : "eye"}
                        size={20}
                        color={isFocused ? "#2586D9" : "#6B7280"}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Input;
